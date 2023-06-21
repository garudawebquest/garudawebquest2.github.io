function toggleStep(stepNumber) {
    var currentStepDescription = document.getElementById('step-' + stepNumber + '-description');

    if (currentStepDescription.classList.contains('open')) {
      currentStepDescription.classList.remove('open');
    } else {
      var previousStepDescription = document.querySelector('.step-description.open');

      if (previousStepDescription) {
        previousStepDescription.classList.remove('open');
      }

      currentStepDescription.classList.add('open');
    }
  }