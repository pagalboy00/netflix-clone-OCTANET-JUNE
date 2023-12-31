import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
  const navigate = useNavigate()
  return (
   <HeaderContainer>
     <div className='logo'>
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
      alt='no internet connection'
      />
     </div>
     <i class="fa fa-globe" aria-hidden="true" id='glob'></i>
     <select
                name="languages"
                id="languagesSelected"
                class="lan"
              >
                <option lan="en" label='English' value="english" selected>English</option>
                <option lan="hi" label='हिन्दी' value="hindi">हिन्दी</option>
              </select>
     <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
      {props.login ? 'Log In ' : 'Sign Up'}
     </button>
   </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .logo{
     img{
      height: 3rem;
      cursor: pointer;
     }
    }
    .lan{
      padding: 0.5rem 1rem;
      width: 10%;
      padding-left: 40px;
      background-color: transparent;
      color: white;
      margin-left: 55rem;
      font-feature-settings:"smcp";
    }
    option{
      background-color: black;
    }
    button{
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
`

export default Header