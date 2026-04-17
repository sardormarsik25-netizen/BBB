import React, { useEffect, useState } from 'react'

const App = () => {
  const [coin, setCoin] = useState(0)
  const [EarnPerTap, setEarnPerTap] = useState(1)
  const [CoinsToLevelUp, setCoinsToLevelUp] = useState(100)
  const [ProfitPerHour, setProfitPerHour] = useState(1)
  const [Rank, setRank] = useState("Bronze")
  const [Level, setLevel] = useState(1)
  const [MaxLevel, setMaxLevel] = useState(9)
  const [Progress, setProgress] = useState(0)
  const [LevelImg, setLevelImg] = useState("https://pngimg.com/d/hamster_PNG14.png")
  const HamsterImg = useState([
    "https://pngimg.com/d/hamster_PNG14.png"

  ])
  const [Energy, setEnergy] = useState(100)
  const [MaxEnergy, setMaxEnergy] = useState(100)

  const IncrementCoin = () => {
    setCoin((prev) => prev + EarnPerTap)
    setProgress((prev) => prev + EarnPerTap)
  }
 if (Energy === 0) {
  alert("sizni enegiyangiz tugadi")
  return
 }

useEffect(() => {
    if (coin == 30) {
      setRank("Bronze")
    } else if (coin == 40) {
      setRank("Silver")
    } else if (coin == 60) {
      setRank("Gold")
    } else if (coin == 900) {
      setRank("Platinum")
    } else if (coin == 1  0) {
      setRank("Diamond")
    } else if (coin == 110) {
      setRank("Epic")
    } else if (coin == 120) {
      setRank("Legendary")
    } else if (coin == 100) {
      setRank("Creator")
    }
}, [coin])



  const LevelUp = () => {
    if (Progress >= CoinsToLevelUp) {
      if (Level >= 9) {
        alert("sz oxirgi levelga keldingiz")
        setProgress(0)
        setLevel(1)
        setLevelImg((prev) )
      } else {
        setProgress(0)
        setLevel((prev) => prev + 1)
        setEarnPerTap((prev) => prev + 1 * Level)
        setCoinsToLevelUp((prev) => prev + 100 * Level)
      }
    }
    console.log("useEFfect ishladi");
  }
  useEffect(() => {
    LevelUp()
  }, [Progress])


  return (
    <div className='flex flex-col w-[600px] mx-auto  gap-4 justify-between'>
      <div className='flex items-center gap-2 text-center justify-center py-5'>
        <div className='bg-base-300 py-2 px-10 rounded-lg flex flex-col items-center'>
          <p>Earn per tap</p>
          <div className='flex items-center gap-1'>
            <img className='w-8' src="https://pngimg.com/d/coin_PNG36871.png" alt="" />
            <p>+{EarnPerTap}</p>
          </div>
        </div>
        <div className='bg-base-300 py-2 px-10 rounded-lg flex flex-col items-center'>
          <p>Profit per hour</p>
          <div className='flex items-center gap-1'>
            <img className='w-8' src="https://pngimg.com/d/coin_PNG36871.png" alt="" />
            <p>+{ProfitPerHour}</p>
          </div>
        </div>
      </div>
      <div className='space-y-5'>
        <div className='flex items-center gap-1 justify-center'>
          <img className='w-16' src="https://pngimg.com/d/coin_PNG36871.png" alt="" />
          <p className='text-6xl font-bold'>{coin}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>{Rank}</p>
          <p>Level {Level}/{MaxLevel}</p>
        </div>
        <div className='w-full'>
          <progress className="progress progress-primary " value={Progress} max={CoinsToLevelUp}></progress>
        </div>
      </div>
      <button onClick={IncrementCoin} className='bg-primary/30 border-8 border-primary rounded-full active:scale-90 transition-all flex items-center justify-center mx-auto size-80'>
        <img className='w-80' src={HamsterImg, [LevelImg]} alt="" />
      </button>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img className='w-8' src="https://emojio.ru/images/apple-b/26a1.png" alt="" />
          <p>{Energy}/{MaxEnergy}</p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-8' src="https://png.pngtree.com/png-vector/20250518/ourmid/pngtree-cartoon-rocket-ship-taking-off-against-a-transparent-background-ready-for-png-image_16314515.png" alt="" />
          <p>Boos</p>
        </div>
      </div>
    </div>
  )
}




export default App