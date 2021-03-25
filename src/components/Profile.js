import React, { useState, useEffect } from 'react';
import { store, db, /* auth */ } from "../firebaseConfig";

const exampleUser = "P5N8GPwMlwbegabdHgewSN0q0YO2"

function Profile(props) {

  const [nick, setNick] = useState('')
  const [gender, setGender] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [error, setError] = useState(null)

  const [dataProfile, setDataProfile] = useState(props.currentUserData)

  const [imageProfileURL, setImageProfileURL] = useState(null)

  const [loadingDataProfile, setLoadingDataProfile] = useState(true)

  useEffect(() => {
    setLoadingDataProfile(true)

    const getImageProfile = async() => {
      try {
        if (props.currentUserId) {
          const imgURL = await store.ref(`/images/${props.currentUserId}`).getDownloadURL()
          setImageProfileURL(imgURL)
          setLoadingDataProfile(false)
        }
      }
      catch (e) {
        console.log(e);
        setImageProfileURL(null)
        setLoadingDataProfile(false)
      }
      /* console.log("Efecto!"); */
    }

    setDataProfile(props.currentUserData)
    getImageProfile()
  }, [props.currentUserId, props.currentUserData])

  /* Same methods outside effect */ 
  const getImageProfile = async() => {
    /* console.log("out the useEffect"); */
    try {
      if (props.currentUserId) {
        const imgURL = await store.ref(`/images/${props.currentUserId}`).getDownloadURL()
        setImageProfileURL(imgURL)
        /* setLoadingDataProfile(false) */

      }
    }
    catch (e) {
      console.log(e);
      setImageProfileURL(null)
    }
  }
  /* End same methods outside effect */ 

  const getDataProfile = async() => {
    if (props.currentUserId) {
      try {
        const dataUser = await db.collection(`Users-Data`).doc(props.currentUserId).get()
        /* console.log(dataUser.data()); */
        setDataProfile(dataUser.data())

        // i dont know, man
        const algo = {...dataUser.data(), id: props.currentUserId}
        props.setCurrentUserData(algo)
      }
      catch (e) {
        console.log(e);
      }
      /* console.log("Efecto!"); */
    }
  }


  const updateProfile = async(e) => {
    e.preventDefault()
    if (!nick.trim()) {
      console.log("Name can't be blanck")
      setError("Name can't be blanck")
    } else if (!gender) {
      console.log("A gender must be select")
      setError("A gender must be select")
    } else {
      setError(null)
      setLoadingDataProfile(true)
  
      const userDataUpdated = {
        nick: nick,
        gender: gender
      }
      
      try {
        /* db.collection(`phoneBook-${props.currentUserId}`).doc(IdToUpdate).set(updatedContact) */
        await db.collection(`Users-Data`).doc(props.currentUserId).set(userDataUpdated)
        // Esto sube  la image
        // console.log("fin de carga de data");
        if (imageFile) {
          await store.ref(`/images/${props.currentUserId}`).put(imageFile)
          await getImageProfile()
          // console.log("fin de carga de img");
        }
        /* .getDownloadURL() */
        await getDataProfile()
        setLoadingDataProfile(false)
        // console.log("fin de get img");
      }
      catch {
        console.log(e);
      }
  
      /* console.log(userData) */
    }
  }


  return (
    <div className="container">
      <h1 className="text-center mt-2">Profile</h1>
      <div className="row mt-5">

        <div className="col">

          {loadingDataProfile?
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

            :

            <>
              <div className="d-flex justify-content-center mb-5">

                <div className="card" style={{width: "18rem"}}>
                  {imageProfileURL?
                    <img src={imageProfileURL} className="card-img-top" alt="..." />
                    :
                    <img src="/phone-book-firebase/images/unnamed.jpg" className="card-img-top" alt="..." />
                  }

                  <div className="card-body">
                    <h5 className="card-title">{dataProfile? dataProfile.nick : "Unknown" }</h5>
                    <p className="card-text">{dataProfile? dataProfile.gender : "No data" }</p>
                  </div>


                </div>
              </div>
            </>
          }

        </div>

        <div className="col mb-5">
          <form onSubmit={props.currentUserId === exampleUser? props.denyFeature : updateProfile} className="form-control" style={{maxWidth:"480px"}}>
            <h4>Edit Profile</h4>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name</label>
              <input type="text" className="form-control" id="username" placeholder="Type a name or nickname" onChange={ (e) => {setNick(e.target.value)} } />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select" aria-label="Default select example" onChange={ (e) => {setGender(e.target.value)} }>
                <option defaultValue>Open this select menu</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unicorn">Unicorn 🦄</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="imageInput" className="form-label">Name</label>
              <input type="file" className="form-control" id="imageInput" placeholder="Type a name or nickname" onChange={(e)=> setImageFile(e.target.files[0])}/>
              <div id="emailHelp" className="form-text">If you want to keep the current profile pic, don't upload another image.</div>
            </div>
            <input type="submit" className="btn btn-dark mt-4 w-100" value="Update profile"/>
            {error? 
              <div className="text-danger mt-2">{error}</div>
              : <></>
            }
          </form>

        </div>

      </div>
    </div>
  );
}

export default Profile;
