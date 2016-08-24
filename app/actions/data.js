import { streamHandler } from '../services/index';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts() {
  return {
    type: REQUEST_POSTS,
    entries: [],
    fetched: false
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    entries: posts,
    receivedAt: Date.now(),
    fetched: true
  }
}

export function fetchPosts() {

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    dispatch(requestPosts());

    // https://davidwalsh.name/async-generators
    // run (async) a generator to completion
    function runGenerator(g) {
        var it = g(), ret;

        // asynchronously iterate over generator
        (function iterate(val) {
            ret = it.next(val);

            if (!ret.done) {
                if ('then' in ret.value) {
                    // Get promise object
                    var promise = ret.value;

                    // wait on the promise and handle errors
                    promise
                    .then(iterate)
                    .catch(function(err) {
                        it.throw(err);
                    });
                }
                // immediate value: just send right back in
                else {
                    // if (response.status >= 400) {
                    //     throw new Error('Bad response from server');
                    // }
                    //
                    // return response.json();
                    // avoid synchronous recursion
                    setTimeout(function() {
                        iterate(ret.value);
                    }, 0 );
                }
            }
        })();
    }

    // return new Promise(function(resolve, reject) {
    //     runGenerator(function *main() {
    //         try {
    //             var res = yield streamHandler.request();
    //             var data = yield res.json();
    //
    //             // Update the app state with the results of the API call
    //             dispatch(receivePosts(data));
    //             resolve();
    //         } catch(err) {
    //             console.log('err',err);
    //         }
    //     });
    // });

    runGenerator(function *main() {
        try {
            var res = yield streamHandler.request();
            var data = yield res.json();

            // Update the app state with the results of the API call
            dispatch(receivePosts(data));
        } catch(err) {
            console.log('err',err);
        }
    });
  }
}
