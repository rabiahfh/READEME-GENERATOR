// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'The MIT license':
      return `![License](https://img.shields.io/badge/license-MIT-red) \n`;
    case 'The GPL license':
      return `![License](https://img.shields.io/badge/license-GPL-red) \n`;
    case 'Apache license 2.0':
      return `![License](https://img.shields.io/badge/license-Apache+2.0-red) \n`;
    case 'The GNU license':
      return `![License](https://img.shields.io/badge/license-GNU-red) \n`;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'The MIT license':
      return `https://choosealicense.com/licenses/mit/`
        ;
    case 'The GPL license':
      return `https://choosealicense.com/licenses/gpl-3.0/`
        ;
    case 'Apache license 2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`
    case 'The GNU license':
      return `https://choosealicense.com/licenses/agpl-3.0/`
        ;
    default:
      return '';

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'The MIT license':
      return `## License 
      [License](https://choosealicense.com/licenses/mit/) \n`
        ;
    case 'The GPL license':
      return `## License 
      [License](https://choosealicense.com/licenses/gpl-3.0/) \n`
        ;
    case 'Apache license 2.0':
      return `## License 
      [License](https://choosealicense.com/licenses/apache-2.0/) \n`
    case 'The GNU license':
      return `## License 
      [License](https://choosealicense.com/licenses/agpl-3.0/) \n`
        ;
    default:
      return '';

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
    ${data.description}
  # ${data.installation}
  # ${data.usage}
   # ${data.contribution}
  # ${data.test}
  ${renderLicenseLink(data.license)}
  # ${data.userName}
  # ${data.Email}
`;
}

module.exports = generateMarkdown;
