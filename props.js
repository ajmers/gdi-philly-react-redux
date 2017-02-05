class App extends Component {
  render() {
    return (
      <GDIButton className='gdi-button'
         onClick={this.onGDIButtonClick}<br/>
         labelAltText='Join now!'
         onMouseEnter={()=> {console.log('Mouse entered!')}}        
         color='green'>
           <div>Click me!</div>
        </GDIButton>
    );
  }
}
