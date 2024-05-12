import Grid from "@material-ui/core/Grid";
import image from '../../assets/profilePhoto.jpeg';

const Info = () => {
    return (
        <div className="general-info">
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={image} alt="Haley Massa profile" className="photo"/>
              <h1 className="name">Haley Massa</h1>
              <h2 className="role-title">Product Engineer II at Ridgeline</h2>
              <div className="text">B.S. Computer Science, B.S. Mathematics<br/>University of Missouri - 2021<br/></div>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2 className="heading right">About</h2>
              <div className="text justify">
                Hello! My name is Haley. 
                I graduated from the University of Missouri-Columbia in May of 2021 with a B.S. in mathematics and a B.S. in computer science.
                I'm currently a full-stack software engineer on the Users & Entitlements team at Ridgeline, at a fintech startup 
                focused on improving antiquated financial asset management software. Outside of web-development, I really enjoy studying data 
                structures and algorithms, and with my background in math I am interested in getting more experience in machine learning and data 
                science. Really, I love just about anything that involves puzzles and code!
              </div>
            </Grid>
          </Grid>
        </div>
    )
}

export default Info;