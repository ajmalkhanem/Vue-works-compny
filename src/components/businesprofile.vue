 <template>
    <div> <navbar></navbar><br>
     <b-container style="background-color: white;"><b-row>
         
      <b-col>
              <img src="../assets/pro.png"><hr>
              <h2 style="color: cadetblue;"><b>Complete Your Profile</b></h2>
          </b-col>
        
        </b-row>
          <b-row>
          
          <b-col><br>
 <div>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Business profile" active><b-card-text>
      <form action="">
        <b-row>
          <b-col>
  <div class="form-group">
    <label for="email" style="color: cadetblue;"><b>Email address:</b></label>
    <input type="email" class="form-control" id="email" style="background-color: rgb(233, 238, 240);text-align: center;" >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="email"style="color: cadetblue;"><b>Email address:</b></label>
      <input type="email" class="form-control" id="email" style="background-color: rgb(233, 238, 240);text-align: center;" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="email"style="color: cadetblue;"><b>Email address:</b></label>
        <input type="email" class="form-control" id="email" style="background-color: rgb(233, 238, 240);text-align: center;" >
      </div></b-col>
      </b-row>
      <b-row><b-col>
  <div class="form-group">
    <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
    <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;" >
  </div></b-col>
  <b-col>
      <div class="form-group">
        <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
        <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;"  >
      </div></b-col></b-row>

      <b-row><b-col>
        <div class="form-group">
          <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
          <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;" >
        </div></b-col>
        <b-col>
            <div class="form-group">
              <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
              <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;"  >
            </div></b-col></b-row>

  <div class="form-group form-check">
    <label class="form-check-label">
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </b-card-text></b-tab>
      <b-tab title="Upload Documents"><b-card-text>
        <documentreg></documentreg>
      </b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
          </b-col>
          
        </b-row></b-container><br>
        <navbar1></navbar1>
        <br><br>
        

  
  
    </div></template>
    <script>
    import navbar from '@/components/navbar'
    import navbar1 from '@/components/navbar1'

    import documentreg from '@/components/documentreg'
      
 export default {
    components: {
   
   navbar,
   documentreg,
   navbar1
   
   
 },
}

    </script>
    <style>

#rcorners1 {
border-radius: 25px;
padding: 20px; 
width: 200px;
height: 8px; 
text-align: center; 
}

</style>


