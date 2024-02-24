import { Grid } from "@mui/material";

const ShopPage = () => {
  return (
    <div>
      
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <h1 className="bg-gray-200">This is Left side bar</h1>
        </Grid>
        <Grid item xs={6}>
        <h1 className="bg-sky-200">This is Middle</h1>
        </Grid>
        <Grid item xs={3}>
        <h1 className="bg-pink-200">This is Right sidebar</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShopPage;
