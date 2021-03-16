import React, { useState } from 'react';
import { store, db } from "../firebaseConfig";

function Profile(props) {

  const [nick, setNick] = useState('')
  const [gender, setGender] = useState('')
  const [imageFile, setImageFile] = useState('')

  const [imageProfileURL, setImageProfileURL] = useState(null)



  const getImageProfile = async() => {
    try {
      const algo = await store.ref(`/images/${props.currentUser}`).getDownloadURL()
      console.log(algo);
      setImageProfileURL(algo)
    }
    catch (e) {
      console.log(e);
    }

  }

  const updateProfile = async(e) => {
    e.preventDefault()
    const userData = {
      nick: nick,
      gender: gender
    }
    try {
      await db.collection(`Users-Data-${props.currentUser}`).add(userData)
      store.ref(`/images/${props.currentUser}`).put(imageFile)
    }
    catch {
      console.log(e);
    }
    // Esto sube  la image
/*     store.ref(`/images/${imageFile.name}`).put(imageFile) */

    console.log(userData)
  }



  return (
    <div className="container">
      <h1 className="text-center mt-2">Profile</h1>
      <h2 className="text-center mt-2">Usuario {props.currentUser}</h2>
      <div className="row mt-5">
        <div className="col">
          <form onSubmit={updateProfile} className="form-control" style={{maxWidth:"480px"}}>
            <h4>Edit Profile</h4>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name</label>
              <input type="text" className="form-control" id="username" placeholder="Type a name or nickname" onChange={ (e) => {setNick(e.target.value)} } />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select" aria-label="Default select example" onChange={ (e) => {setGender(e.target.value)} }>
                <option defaultValue>Open this select menu</option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="u">Unicorn 🦄</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="imageInput" className="form-label">Name</label>
              <input type="file" className="form-control" id="imageInput" placeholder="Type a name or nickname" onChange={(e)=> setImageFile(e.target.files[0])}/>
            </div>
            <input type="submit" className="btn btn-dark mt-4 w-100" value="Update profile"/>
          </form>
        </div>
        <div className="col">
          <h4>User's Details</h4>
          <button onClick={getImageProfile}>Get Profile Pic</button>
          {imageProfileURL?
            <figure>
              <img className="img-fluid" src={imageProfileURL} alt=""/>
            </figure>
            :
            <></>
          }

        </div>
      </div>
    </ div>
  );
}

export default Profile;
