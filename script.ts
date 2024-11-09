//listing element
document
.getElementById('resumeForm')
?.addEventListener('submit', function(event){
    event.preventDefault();
//profile picture
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    //type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //check if all element 
if (
    profilePictureInput && 
    nameElement &&
     emailElement &&
      phoneElement &&
       educationElement &&
        experienceElement &&
         skillsElement 
   
) {
//usernameElement 
    const name = nameElement.value;
    const email = emailElement.value;
    const education = educationElement.value;
    const phone = phoneElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

//picture element
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL =  profilePictureFile ?
URL.createObjectURL(profilePictureFile) : "";


    //creat resume output
    const resumeHTML =`
    <h2>Resume</h2>
    ${
        profilePictureURL 
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="ProfilePicture">` 
        : ""
    }
    <p><strong>name</strong> ${name} </span> </p>
    <p><strong>email</strong> ${email} </span> </p>
    <p><strong>phone</strong>  ${phone} </span> </p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experienc</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Disply the resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeHTML;
resumeOutputElement.classList.remove("hidden")
//creat content for button
const buttonsContainer = document.createElement('div');
buttonsContainer.id = "buttonsContainer";
resumeOutputElement.appendChild(buttonsContainer);

// Add Download pdf button
const DownloadButton = document.createElement("button");
DownloadButton.textContent = "Download as PDF";
DownloadButton.addEventListener("click", () => {
    window.print();
});
buttonsContainer.appendChild(DownloadButton);

//add shareble link button
const shareLinkButton = document.createElement("button");
shareLinkButton.textContent = "copy shareable Link";
shareLinkButton.addEventListener("click", async () => {
    try{
 //create a unique shareable link
 const shareableLink = `https://yourdomain.com/resume/${name.replace(
    /\s+/g,
    "_"
 )}_cv.html`;
 //use clipboad API to copy the shareable link
 await navigator.clipboard.writeText(shareableLink);
 alert("shareable link copied to clipboad!");
 

    }catch (err) {
console.error("Failed to copy link:",err);
alert("Failed to copy link to clipboad.Pleace try again.");
    }
});
buttonsContainer.appendChild(shareLinkButton);
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more required elements are missing');
    }
});


