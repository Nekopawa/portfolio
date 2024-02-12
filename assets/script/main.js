(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
})();

function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;

  const name = document.getElementById("profile.name");
  name.innerHTML = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerHTML = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerHTML = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerHTML = profileData.phone;

  const email = document.getElementById("profile.email");
  email.innerHTML = profileData.email;
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => {
      return `
        <picture class="p-logos__item">
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" />
        </picture>
    `;
    })
    .join("");
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => {
      return `<li class="p-soft-skills__item">${skill}</li>`;
    })
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => {
      return `
      <li class="p-languages_item">${language}</li>
    `;
    })
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((portfolioItem) => {
      return `
      <li class="p-portfolio__item">
      <h3 class="p-portfolio__title ${portfolioItem.github ? "github" : ""}">
        ${portfolioItem.name}</h3>
      <a
        class="p-portfolio__link"
        href="${portfolioItem.url}"
        target="_blank"
        >${portfolioItem.url}</a
      >
    </li>
  `;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
  const experiences = document.getElementById("profile.experience");
  experiences.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `
      <li class="p-professional-experience__item">
        <h3 class="p-job-title">${experience.name}</h3>
        <p class="p-period">${experience.period}</p>
        <p class="p-job-description">
          ${experience.description}
        </p>
      </li>`;
    })
    .join("");
}
