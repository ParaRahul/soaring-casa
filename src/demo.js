





<motion.div style={{backgroundColor: 'blue', color:'black', textAlign:'center', margin:'50px 200px 50px 200px'}} 
initial={{x:'-100vw', opacity:0}} 
animate={{ x:0, y: 50, opacity:1}}
transition={{delay:1.5, duration: 2, type:'spring', stiffness:120 }} >

<motion.h1 whileTap={{
    scale:1.3, originX:0, color:'red'}} 
    transition={{type:'spring', stiffness:300}}
>event</motion.h1>

<motion.button class='btn' whileHover={{
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',//give a white glow upon hover
}} >button</motion.button>
</motion.div>