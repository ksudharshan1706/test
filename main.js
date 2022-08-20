const resume = {
  'first_name' : 'sudharshan',
  'last_name' : 'kamavaram',
  'DOB' : '14-04-1998',
  'Profession' : 'Software Engineer',
  'Company' : 'Taxilla',
  'Skills' : {
    'DB':'MySql',
    'Scripting_Language' : ['Python','JavaScript'],
    'Framework': ['.Net','Flask'],
    'Technology':'SSIS'
  },
  'Projects':['Black Knight Financial Services','Automated Docket']
}

//For each
Object.keys(resume).forEach((x) => console.log(x+":   ",resume[x])) 

//For In
for(var key in resume){
  console.log(key+": ",resume[key])
}

//For of
for(var key of Object.keys(resume)){
  console.log(key,resume[key])
}
