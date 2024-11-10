"use strict";
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // get form elements
    const usernameElement = document.getElementById("username");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const profilePictureInput = document.getElementById("profilePicture");
    const degreeElement = document.getElementById("degree");
    const institutionElement = document.getElementById("institution");
    const graduationDateElement = document.getElementById("graduationDate");
    const jobTitleElement = document.getElementById("jobTitle");
    const companyNameElement = document.getElementById("companyName");
    const achievementsElement = document.getElementById("achievements");
    const skillsElement = document.getElementById("skills");
    // check if all elements are present
    if (usernameElement &&
        nameElement &&
        emailElement &&
        phoneElement &&
        profilePictureInput &&
        degreeElement &&
        institutionElement &&
        graduationDateElement &&
        jobTitleElement &&
        companyNameElement &&
        achievementsElement &&
        skillsElement) {
        // get values from form
        const username = usernameElement.value;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const graduation = graduationDateElement.value;
        const jobTitle = jobTitleElement.value;
        const companyName = companyNameElement.value;
        const achievements = achievementsElement.value;
        const skills = skillsElement.value;
        // handle profile picture
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // generate the resume HTML content
        const resumeHTML = `
      <h2>Resume</h2>
      ${profilePictureURL
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilepicture">`
            : ""}
      <p><strong>User Name:</strong> ${username}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <h3>EDUCATION DETAILS</h3>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Institution Name:</strong> ${institution}</p>
      <p><strong>Graduation Date:</strong> ${graduation}</p>
      <h3>WORK EXPERIENCE</h3>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Achievements:</strong> ${achievements}</p>
      <h3>SKILLS</h3>
      <p><strong>Skills:</strong> ${skills}</p>
      `;
        // display the resume in the output container
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            // dynamically create and show buttons (if not already created)
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            // create and append download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            // create and append shareable link button
            const shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy Shareable Link";
            shareableLinkButton.addEventListener("click", async () => {
                try {
                    // create unique shareable link
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                    // clipboard API to copy the link
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                }
                catch (err) {
                    console.error("Failed to copy link: ", err);
                    alert("Failed to copy link to clipboard. Please try again.");
                }
            });
            buttonsContainer.appendChild(shareableLinkButton);
            // append the buttons container to the resume output
            resumeOutputElement.appendChild(buttonsContainer);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("Form elements are missing.");
    }
});
