import { Firebase }  from '../app/firebase'
import { PERIOD } from '../progress/ProgressHelper'


let API = {};

let firebaseSingleton = (() => {
  let instance = null

  const getInstance = () => {
    if (instance === null) {
      instance = new Firebase()
    }
    return instance
  }

  return { getInstance }
})()
const getDBInstance = () => firebaseSingleton.getInstance()

// USER API
API.signinUser = async (login, pwd) => {
  const user = await getDBInstance().signin(login, pwd)
  return convertUser(user)
}

API.signinWithGoogle = async () => {
  const user = await getDBInstance().signinWithGoogle()
  return convertUser(user)
}

API.signinWithFacebook = async () => {
  const user = await getDBInstance().signinWithFacebook()
  return convertUser(user)
}

API.signupUser = async (login, pwd) => {
  return await getDBInstance().signup(login, pwd)
}

API.signout = async () => {
  return await getDBInstance().signout()
}

API.fetchProfile = async(email) => {
  return await getDBInstance().user(email)
} 

API.updateProfile = async (firstName, lastName) => {
  const name = displayName(firstName, lastName)
  return await getDBInstance().updateProfile(name)
}

API.resetPwd = async (email) => {
  return await getDBInstance().resetPwd(email)
}

API.sendMsg = (login, msg)  => {
  // TODO test
}

const convertUser = userDB => {
  const user = userDB.user
  
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    photo: user.photoURL
  }
}

const displayName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}



// GARBAGE API
API.addWeight = async (nbPers, nbDays, totalWeight, date, type) => {
  const weightObj = convertToWeight(nbPers, nbDays, totalWeight, date, type)
  console.log('weightObj', weightObj)
  console.log(getDBInstance().addWeight(weightObj))
}




// PROGRESS
API.fetchProgress = (period = PERIOD.WEEK) => {
  // TODO dynamize
  // week
  const dataWeek = {
    labels: ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'],
    series: [
      [5, 9, 2, 2, 4, 3, 5, 4],
      [3, 4, 7, 8, 2, 1.44, 5, 1]
    ]
  }

  // month
  const dayInMonth = []
  for (let i = 1; i <=32; i++)
    dayInMonth.push(i)

  const dataMonth = {
    labels: dayInMonth.map(x => x.toString(10)),
    series: [
      [5, 9, 2, 2, 4, 3, 5, 4, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 18, 19, 30, 31, 31],
      [3, 4, 7, 8, 2, 1.44, 5, null, null, null, null, null, null, null, null, 1, 4, 4, 5, 6, 6, 6, 2, 3, 4, 6, 8, 8, 8, 43, 32, 32]
    ]
  }

  // trimester
  const dataTrimester = {
    labels: ['janv', 'fev', 'mars', 'mai'],
    series: [
      [44.5, 33.2, 34, 34],
      [20, 29, 29, 39]
    ]
  }

  // semester
  const dataSemester = {
    labels: ['janv', 'fev', 'mars', 'avril', 'mai', 'juin', 'juillet'],
    series: [
      [44.5, 33.2, 34, 20, 19, 18, 18],
      [20, 29, 29, 23, 22, 15, 15]
    ]
  }

  switch (period) {
    case PERIOD.WEEK: 
      return dataWeek
    case PERIOD.MONTH:
      return dataMonth
    case PERIOD.TRIMESTER:
      return dataTrimester
    default: 
      return dataSemester
  }
}



// SHARED API
API.loadData = async () => {
  await getDBInstance().loadDataWeight()
  await getDBInstance().loadDataUser()

  // test
  // getDBInstance().testReadAllWeights()
  // getDBInstance().testReadAllWeightsBtwDates()
}



// PRIVATE

const convertToWeight = (nbPers, nbDays, totalWeight, date, type) => {
  console.log('convertToWeight');
  const timestamp = getDBInstance().toFirebaseTimestamp(date)
  console.log(timestamp)
  

  return {
    nbPers, 
    nbDays, 
    totalWeight, 
    type,
    recordedDate: timestamp,
  }
}

export default API