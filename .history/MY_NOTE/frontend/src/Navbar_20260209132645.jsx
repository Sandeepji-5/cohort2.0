import React from 'react';

const Navbar = ( {setSignUp,  setSignIn}) => {
  return (
    <nav style={{
      height: '4rem',
      background: '#1f2937',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '1.25rem',
        fontWeight: 700
      }}>
        MyNote
      </h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
        onClick={()=>setSignIn(true)}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #fff',
            color: '#fff',
            borderRadius: '0.375rem',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => {
            e.target.style.background = '#fff';
            e.target.style.color = '#1f2937';
          }}
          onMouseOut={e => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#fff';
          }}
        >
          Sign In
        </button>
        <button
        onClick={()=>setSignUp(true)}
          style={{
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => {
            e.target.style.background = '#2563eb';
          }}
          onMouseOut={e => {
            e.target.style.background = '#3b82f6';
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
