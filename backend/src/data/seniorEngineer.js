import { fileURLToPath } from 'url';
import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const imagePath = path.join(__dirname, 'assets', 'Job opportunity logo.jpg');
// const imagePath = '/media/aashutosh/Local%20Disk%20:%20D/aviationspace/backend/src/assets/';
const imagePath = '/Downloads/assets/';

const seniorEngineer = {
    tittle: "Senior Engineer - Aerospace Manufacturing",
    // image: imagePath,
    // image: "/assets/Job opportunity logo.jpg",
    // image: "/media/aashutosh/Local%20Disk%20:%20D/aviationspace/backend/src/assets/Job%20opportunity%20logo.jpg",
    // image: `${imagePath}Job%20opportunity%20logo.jpg`,
    image: "Job opportunity logo.jpg",
    email: 'maria@aviationspace.in',
    desc: 'Wanted for the Aerospace Division of an Engineering Component Manufacturing Company...',
    paragraph: [
        "Wanted for the Aerospace Division of an Engineering Component Manufacturing Company in Bangalore.",
        "Qualification: BE/Diploma in Mechanical Engineering.",
        "Experience: 10 years and more",
        "Knowledge in:",
        "Aerospace customer requirements including reading and understanding component drawing. Deciding manufacturing processes including special processes Cost estimation",
        "Responsible for: ",
        "On-time delivery of parts Meeting quality requirements of Aerospace parts Sourcing of raw materials Outsourcing of special processes and follow-up with vendors. ",
        "If you have the qualifications and experience for this position. Email your details to: ",
        "Recently retired people with the above experience also could apply. We look forward to hearing from you!",
        "Email your details to: "
    ]

}

export default seniorEngineer;