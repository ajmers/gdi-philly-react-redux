class App extends Component {
  render() {
    return (
      <GDIButton className='gdi-button'
         onClick={this.onGDIButtonClick}
         labelAltText={`Join now, ${name}!`}
         onMouseEnter={()=> {console.log('Mouse entered!')}}        
         color='green'>
           <div>Click me!</div>
        </GDIButton>
    );
  }
}
