import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName : "Ganesh", lastName : "Navale", email : "ganesh121@gmail.com"};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type = "greeting"
                    title="Welcome"
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext = "Access and manage your account and transactions efficiently"
                />
            
            <TotalBalanceBox
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance = {5000}
            />
            </header>
            Recent Transaction
        </div>
        <RightSideBar 
          user = {loggedIn}
          transactions = {[]}
          banks={[{currentBalance:1000},{ currentBalance:2000}]}
        />
    </section>
  )
}

export default Home
