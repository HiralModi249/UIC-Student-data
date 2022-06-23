import fs from 'fs';
//import ObjectsToCsv from 'objects-to-csv';
//import JSONdata from 'data.json';

let majors = [
    "Accounting",
    "Acting",
    "African American Studies",
    "African-American Studies",
    "AHS-Undeclared",
    "Anthropology",
    "Applied Psychology",
    "Architectural Studies",
    "Architecture",
    "Art",
    "Art Education",
    "Art-Foundation",
    "Art History",
    "Biochemistry",
    "Bioengineering",
    "Biological Sciences",
    "Biomedical Engineering",
    "Black Studies",
    "Bus Admin-Undeclared",
    "Business Administration",
    "Business Administration (MBA)",
    "CADA-Undeclared",
    "Campus Certificate Program",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Classical Civilization",
    "Classical Languages & Lit",
    "Classical Studies",
    "Communication",
    "Computer Engineering",
    "Computer Science",
    "Computer Sci & Linguistics",
    "Criminal Justice",
    "Criminology, Law, and Justice",
    "CUPPA-Undeclared",
    "Data Science",
    "Dental Medicine",
    "Dental Medicine (DMDAS Prgm)",
    "Dental Medicine (IDDP)",
    "Dentistry",
    "Dentistry (IDP)",
    "Design",
    "Design Studies",
    "Disability & Human Development",
    "Earth & Environmental Sciences",
    "Economics",
    "Education - Undeclared",
    "Electrical Engineering",
    "Electronic Visualization",
    "Elementary Education",
    "Employee Benefits",
    "Endodontics - Certificate",
    "Engineering",
    "Engineering Management",
    "Engineering Nondegree-CE",
    "Engineering Physics",
    "Engineering - Pre-CS & Design",
    "Engineering - Pre-Data Science",
    "Engineering-Undeclared",
    "English",
    "Entrepreneurship",
    "Estate Planning",
    "Exercise Physiology",
    "Finance",
    "French",
    "French and Francophone Studies",
    "Gender and Women's Studies",
    "Geography",
    "Germanic Studies",
    "Graphic Design",
    "Graphic/Industrial Desgn-Found",
    "Health Information Management",
    "History",
    "Human Development & Learning",
    "Human Nutrition",
    "Human Nutrition & Dietetics",
    "Human Resource Management",
    "Individual Plan of Study",
    "Industrial Design",
    "Industrial Engineering",
    "Information & Decision Sci",
    "Info Tech and Privacy Law",
    "Integrated Design and Arts",
    "Integrated Health Studies",
    "Intellectual Property Law",
    "Intensive English",
    "InterdisciplinaryEducArts",
    "Intl Business and Trade Law",
    "Italian",
    "Jazz Studies",
    "Kinesiology",
    "Kinesiology, Exercise Sci",
    "Kinesiology - Undeclared",
    "LAS Online Pathways Nondegree",
    "LAS - PreHealth/PreScience",
    "LAS Sciences Nondegree-CE",
    "Latin Amer and Latino Studies",
    "Latin American Studies",
    "Law",
    "Liberal Arts - Pre-CS & Ling",
    "Liberal Arts - Pre-IHS",
    "Liberal Arts - PreNeuroscience",
    "Liberal Arts - Undeclared",
    "Liberal Studies",
    "Management",
    "Management Science, General",
    "Marketing",
    "Math and Computer Science",
    "Math & Computer Science",
    "Mathematics",
    "Mechanical Engineering",
    "Medical Preparatory Nondegree",
    "Medicine - Chicago",
    "Movement Sciences",
    "Movement Sciences-Undeclared",
    "Moving Image",
    "Music",
    "Music Business",
    "Neuroscience",
    "Nondegree",
    "Nondegree-CE",
    "Nondegree Course-CE",
    "Nursing (BSN)",
    "Nursing Nondegree-CE",
    "Nursing Practice",
    "Nursing-R.N. Completion (BSN)",
    "Nursing: RN to BSN Completion",
    "Nutrition",
    "Occupational Therapy (OTD)",
    "Oral and Maxillof Surg - Cert",
    "Orthodontics - Certificate",
    "Pediatric Dentistry - Certific",
    "PE: Pre-Teacher Ed, Kinsiol",
    "Performance",
    "Periodontics - Certificate",
    "Pharmacy -  CCO (PharmD)",
    "Pharmacy (PharmD)",
    "Philosophy",
    "Photo/Film/Electronic Media",
    "Photography",
    "Physical Ed, Community Phys Ed",
    "Physical Ed,K-12 Certification",
    "Physical Therapy",
    "Physics",
    "Polish",
    "Polish, Russian & CEE Studies",
    "Political Science",
    "Pre-Art Education",
    "Pre-Elementary Education",
    "Pre-Health Information Mgmt",
    "Pre-Human Nutrition",
    "Pre-Medical Lab Science",
    "Pre-Nursing",
    "Pre-Occupational Therapy",
    "Pre-Pharmacy",
    "Pre-Physical Therapy",
    "Pre-Social Work",
    "Prosthodontics - Certificate",
    "Psychology",
    "Public Health",
    "Public Health (DrPH)",
    "Public Health (MPH)",
    "Public Health - Undeclared",
    "Public Policy",
    "Real Estate",
    "Real Estate Law",
    "Rehabilitation Sciences",
    "Russian",
    "SCALES Program Nondegree",
    "Social Work",
    "Social Work Nondegree-CE",
    "Sociology",
    "Spanish",
    "Spanish-Economics",
    "Statistics",
    "Stats & Operations Res",
    "Studio Arts",
    "Summer Session",
    "Tax Law",
    "Teaching of Biol Sciences",
    "Teaching of Chemistry",
    "Teaching of English",
    "Teaching of French",
    "Teaching of Geography",
    "Teaching of German",
    "Teaching of History",
    "Teaching of Mathematics",
    "Teaching of Physics",
    "Teaching of Spanish",
    "Theatre",
    "Theatre and Performance",
    "Theatre Design",
    "TheatreDesign,Production&Tech",
    "Urban and Public Affairs",
    "Urban Education",
    "Urban Studies"
];

let minors = [
    "African American Studies ",
    "Ancient Greek",
    "Anthropology",
    "Arabic",
    "Architectural Studies",
    "Art",
    "Art History",
    "Asian American Studies",
    "Asian Studies",
    "Bioengineering",
    "Biological Sciences",
    "Biology",
    "Biomedical Engineering",
    "Black Studies",
    "Business Administration",
    "Business Analytics",
    "Business Operations",
    "Business Statistics",
    "Central & Eastern Eur Studies",
    "Chemical Engineering",
    "Chemistry",
    "Chinese",
    "Civic Analytics",
    "Civil Engineering",
    "Classical Civilization",
    "Classical Studies",
    "Communication",
    "Computer Engineering",
    "Computer Science",
    "Criminal Justice",
    "Criminology, Law, and Justice",
    "Disability & Human Development",
    "Earth & Environmental Sciences",
    "Economics",
    "Education",
    "Electrical Engineering",
    "English",
    "English as a Second Language",
    "Entrepreneurship",
    "Environmental Engineering",
    "Finance",
    "Food Science",
    "French",
    "French and Francophone Studies",
    "Gender and Women's Studies",
    "Geographic Info. Systems",
    "Geography",
    "German",
    "Germanic Studies",
    "Global Asian Studies",
    "History",
    "Human Capital & Labor Markets",
    "Human Resource Management",
    "Industrial Engineering",
    "Information Technology",
    "Instructional Design/Training",
    "International Business",
    "International Studies",
    "Italian",
    "Italian & Italian Amer Studies",
    "Jewish Studies",
    "Kinesiology",
    "Labor Markets &Workforce Devel",
    "LAS International Studies",
    "Latin",
    "Latina/Latino Studies",
    "Latin Amer and Latino Studies",
    "Latin American Studies",
    "Law and Society",
    "Leadership",
    "Life Science Visualization",
    "Linguistics",
    "Lithuanian Studies",
    "Management",
    "Management Information Systems",
    "Managerial Skills",
    "Materials Engineering",
    "Math & Computer Science",
    "Mathematics",
    "Mechanical Engineering",
    "Movement Sciences",
    "Moving Image Arts",
    "Museum and Exhibition Studies",
    "Music",
    "Native American Studies",
    "Nonprofit Management",
    "Nutrition",
    "Philosophy",
    "Physics",
    "Polish",
    "Polish Studies",
    "Political Science",
    "Professional Writing",
    "Psychology",
    "Public Health",
    "Public Policy",
    "Real Estate",
    "Religious Studies",
    "Russian",
    "Russian Studies",
    "Social Justice",
    "Sociology",
    "Spanish",
    "Spanish for the Professions",
    "Studio Arts",
    "Supply Chain Management",
    "Supply Chain & Operations Mgmt",
    "Sustainable Cities",
    "Teaching of English",
    "Teaching of French",
    "Teaching of German",
    "Teaching of Physics",
    "Teaching of Spanish",
    "Theatre",
    "Urban Planning & Policy",
    "Urban Studies",
    " "
];

//Generate UIN - nine digit random number
function createUIN() {
    let min = 10000000;
    let max = 99999999;
    let ID = Math.floor(Math.random() * (max - min + 1) ) + max;
    return ID;
};

//Generate term - Term is identified at UIC by 6 digits. 
//The first digit is the campus (2 - Chicago) followed by the year 
//then the last digit is the semester (8-fall, 1-Spring, 5-summer).
//5 years max, 220181 - 220221 each year has 3 sem

function createTerm() {
    let years = [2018, 2019, 2020, 2021, 2022];
    let randomYear = Math.floor(Math.random()*years.length);
    //console.log(years[randomYear]);
    let selectYear = years[randomYear];

    let sem = [1,5,8];
    let randomSEM = Math.floor(Math.random()*sem.length);
    //console.log(sem[randomSEM]);
    let selectSEM = sem[randomSEM];

    let term = '2' + selectYear + selectSEM;
    //console.log(term);
    return term;
};

let major, minor;     //returns a major,minor
let classStandingLength;

// Returns an array of objects 
function semesters(createdTerm) {
    let list_of_sem = [220181, 220185, 220188, 220191, 220195, 220198, 
                220201, 220205, 220208, 220211, 220215, 220218, 220221, 220225, 220228];
    
    major = programs(majors);       //returns a major
    minor = programs(minors);       //returns a minor
    let enrolledTerms =[];              //array of terms enrolled
    let enrolledSemesters = [] ;        //array of all enrolled semesters with term, major, minor
    const semObject = {};               //object created
    semObject.Term = enrolledTerms;
    semObject.Major = major;
    semObject.Minor = minor;
                                        //

    for (let x in list_of_sem) {        //checks for generated term in list
        if (createdTerm == list_of_sem[x]) {     //if exists then push everything in temp array for output
            for (let i = x; i < list_of_sem.length; i++) {
                if(enrolledTerms) {
                    enrolledTerms.push(list_of_sem[i]);     //array created of all enrolled terms
                }
            }       
        }   
    } 
    classStandingLength = enrolledTerms.length; 

    for (let k = 0 ; k < enrolledTerms.length; k++) {
        enrolledSemesters[k] = {Term:semObject.Term[k], Major:semObject.Major, Minor: semObject.Minor};
        enrolledSemesters.push(enrolledSemesters[k]);           //returns an Object of term, major, minor and the whole object is changed
    }                                                           //into an array of oject
    
    let randomIndex = Math.floor(Math.random()*enrolledTerms.length);
    let selectTerm = enrolledTerms[randomIndex];
    let newMinor = random_ChangeProgram();      //calls a function for choosing a new minor
    for (let p = randomIndex; p<= enrolledTerms.length; p++ ){
        semObject.Minor = newMinor;         //returns an Object of term, major and updated minor
        enrolledSemesters[p] = {Term:semObject.Term[p], Major:semObject.Major, Minor: semObject.Minor};    
    }
    enrolledSemesters.pop();
    return enrolledSemesters; 
};

function random_ChangeProgram () {
    let change = [0,1];
    let lengthOfChange = change.length; 
    let randomChange = Math.floor(Math.random()*lengthOfChange);
    let doesChange = change[randomChange];
    //console.log("doesChange: " + doesChange);
    let change_minor;    //change in minor
    if (doesChange == 1) {
        change_minor = programs(minors);   //returns a new minor
    }
    if (doesChange == 0) {
        change_minor = minor;           //returns the existing minor
    }
    return change_minor;
};

// Returns length of returned array from semesters
function length_array(p1) {
    let length_temp = p1.length;
    return length_temp;
};

//Returns class standing of a uin
function classStanding(enrolledSemesters){
    let lengthOfSem = enrolledSemesters.length;

    if (lengthOfSem < 3 ) {
        return "freshman";
    }
    else if (lengthOfSem >2 && lengthOfSem < 5) {
        return "Sophmore";
    }
    else if (lengthOfSem >4 && lengthOfSem < 7) {
        return "Junior";
    }
    else {
        return "Senior";
    }
};

function classStanding_flatfile(enrolledSemesters){
    let temp = [];
    //console.log("list: " + enrolledSemesters);
    for (let i =0; i<= enrolledSemesters.length - 1; i++) {
        //console.log("here: "+ enrolledSemesters.length);
        if (i < 2 ) {
            temp.push("freshman");
        }
        if (i > 1 && i < 4) {
            temp.push("Sophmore");  
        }
        if (i > 3 && i < 6) {
            temp.push("Junior");
        }
        if (i >= 6 ) {
            temp.push("Senior");
        } 
    }
    return temp;
};
//console.log(classStanding_flatfile([220201, 220205, 220208]));


//Generates majors or minors
function programs(providedList){
    let len = providedList.length+1;  
    let ID =  Math.floor(Math.random()*len);
    return providedList[ID];
};


class student  {
    constructor(UIN, currentClassStanding, AllclassStanding, semester) {
        this.UIN = UIN;
        this.currentClassStanding = currentClassStanding;
        this.AllclassStanding = AllclassStanding;
        this.semesters = semester;

    }
    sem(Term, Major, Minor) {
        this.Term = Term;
        this.Major = Major;
        this.Minor = Minor;  
    }

}

//create for loop
let data = [];
for (let i =0; i< 100; i++) {
    let createdTerm = createTerm();
    data[i]= new student(createUIN(), classStanding(semesters(createdTerm)), classStanding_flatfile(semesters(createdTerm)), semesters(createdTerm));  
}
//console.log(data);

let jsonObject ={};
let  jsonFile =[];
for (let i =0; i<data.length; i++) {
    //for loop for each student to print all terms
    for (let j =0; j< data[i].semesters.length; j++) {      
        jsonObject =  {UIN:data[i].UIN , 
        ClassStanding:data[i].currentClassStanding , 
        semesters:data[i].semesters
        };        
        
    } 
    jsonFile.push(jsonObject);
} 
//uncomment this when you want to update file or else data will change
//fs.writeFileSync('data.json', JSON.stringify(jsonFile, undefined, 2));

//TO GENERATE FLATFILE START 
var file = [];
for (let i =0; i<data.length; i++) {
    //for loop for each student to print all terms
    for (let j =0; j< data[i].semesters.length; j++) {
        file.push(data[i].UIN + ";" + data[i].AllclassStanding[j]+ ";" + data[i].semesters[j].Term + ";" + data[i].semesters[j].Major + ";" + data[i].semesters[j].Minor );
        //file.push(data[i].UIN , data[i].AllclassStanding[j] , data[i].semesters[j].Term , data[i].semesters[j].Major , data[i].semesters[j].Minor );
    } 
    
} 


//uncomment this when you want to update file or else data will change
// let writer = fs.createWriteStream('student_data.csv');
// for(let i =0; i< file.length; i++) {
//     writer.write(file[i]);
//     writer.write('\n');
// }

// writer.close();


//----------------------------------------------------




// const csv = new ObjectsToCsv(data);
// csv.toDisk('./student_data.csv', {append: true})  ;  


//go through dataset like pie chart







//create a user-defined function to download CSV file   
// function download_csv_file() {  
//     //define the heading for each row of the data  
//     var csv = 'UIN,Class Standing, Term, Major, Minor\n';  

//     //display the created CSV data on the web browser   
//     //document.write(file);  
    
//     var hiddenElement = document.createElement('a');   
//     //hiddenElement.target = '_blank';  
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv) + encodeURIComponent(writer);
    
//     //provide the name for the CSV file to be downloaded  
//     hiddenElement.download = 'Student Data.csv';  
//     hiddenElement.click();  
// }  
