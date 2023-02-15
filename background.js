// Select the node that will be observed for mutations
var targetNode = document.getElementById('content');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            // do something with content
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type == 'subtree') {
          // do something with content
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();