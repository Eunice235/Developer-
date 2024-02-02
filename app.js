const cvButton = document.getElementById('CV');

// Add a click event listener to the button
cvButton.addEventListener('click', () => {
  // Create a new anchor element
  const downloadLink = document.createElement('a');
  
  // Set the href attribute to the location of your CV file
  downloadLink.href = 'https://docs.google.com/document/d/12j6HQpnEhU3r6q8tATV0o94o-Dcc30Kl5jRbO_VdtHE/edit?pli=1';
  
  // Set the download attribute to specify the file name
  downloadLink.download = 'curriculumn vitae.pdf';
  
  // Trigger the click event on the anchor element
  downloadLink.click();
});

const cv = document.getElementById('CV');

cv.addEventListener('mouseover', () => {
  cv.style.backgroundColor = 'darkgreen';
  cv.style.borderRadius = '30%';
});

cv.addEventListener('mouseout', () => {
  cv.style.backgroundColor = '';
  cv.style.borderRadius = '';
});
