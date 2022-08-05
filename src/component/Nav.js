

function Nav() {

const styles ={

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
   backgroundImage: 'linear-gradient(to right,#672280, #A626D3 )',
   color: 'white',
   padding: "25px",
    
}



    return(

<nav style={styles}>

<div style={{display: 'flex' ,alignItems: 'center'}} className='logo'>
    <img style={{height:50,marginRight:10}} src="../memes/face.png" alt="smile head" />
    <h1>Meme Generator</h1>
</div>

<h3>React - Project 3</h3>

</nav>


    )
    
}

export default Nav ;