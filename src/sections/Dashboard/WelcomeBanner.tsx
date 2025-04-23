import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background-color .2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`

const Welcome = styled.div`
background: linear-gradient(-45deg, #ffb07c, #ff3e88, #2969ff, #ef3cff, #ff3c87);
  /* 1. שמים את ה-banner.png בתור רקע ראשון, ואח”כ הגרדיאנט מעליו */
  background:
    url('/banner.png') no-repeat center center,
    linear-gradient(-45deg, #ffb07c, #ff3e88, #2969ff, #ef3cff, #ff3c87);

  /* 2. מגדירים גודל לכל רקע בנפרד (ראשון = תמונה, שני = הגרדיאנט) */
  background-size:
    cover,    /* banner.png יתפרס על כל הבלוק */
    300% 300%;

   background-size: 300% 300%;
   animation: welcome-fade-in .5s ease, backgroundGradient 30s ease infinite;
   border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;

  @keyframes backgroundGradient {
    0%   { background-position: 0% 50%, 0 0; }
    50%  { background-position: 100% 50%, 0 0; }
    100% { background-position: 0% 50%, 0 0; }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;


export function WelcomeBanner() {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const store = useUserStore()
  const copyInvite = () => {
    store.set({ userModal: true })
    if (!wallet.connected) {
      walletModal.setVisible(true)
    }
  }

  return (
    <Welcome>
      {/* תמונה מוחלטת ברקע */}
     <img>
       src="/banner.png"
       alt="Banner background"
       style={{
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         objectFit: 'cover',
         zIndex: 0,
      </img>
       }}
     />
      <div>
        <h1>Israel Games Casino 👋</h1>
        <p>
          A fair, simple and decentralized casino on Solana.
        </p>
      </div>
      <Buttons>
        <button onClick={copyInvite}>
          💸 Copy Invite
        </button>
      </Buttons>
    </Welcome>
  )
}
