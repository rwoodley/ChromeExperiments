chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('VisualCalculator.html', {
    'bounds': {
      'width': 900,
      'height': 500
    }
  });
});
