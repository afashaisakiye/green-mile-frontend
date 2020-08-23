import React ,{useState} from 'react'

export default function Header() {
const [profilemenu, setProfilemenu] = useState(false)  
  return (
      <header className="app-header">
          <div className="header-wrapper">
              <div className="search">
                <i className="fas fa-search"></i>
                <input placeholder="Type and press enter" type="search"/>
              </div>
              <div className="profile-side" >
                  <div className="notification">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="profile">
                    <img onClick={()=>setProfilemenu(!profilemenu)} src="https://via.placeholder.com/150" alt=""/>
                    {profilemenu && (
                      <div className="profile-menu">
                      <ul class="profile-menu-list">
                          <li><span>Edit Profile</span><i class="fas fa-pencil-alt"></i></li>
                          <li><span>Preferences</span><i class="fas fa-cog"></i></li>
                          <li><span>Logout</span><i class="fas fa-power-off"></i></li>
                      </ul>
                  </div>
                    )}
                  </div>
              </div>
          </div>
      </header>
    )
}
