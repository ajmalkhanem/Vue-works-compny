 <template>
    <div> <navbar></navbar><br>
    
<b-jumbotron style="background-color:white;">   
    <div>
  <b-alert show dismissible>
Add your vehicle details and upload documents  </b-alert>
</div>      
     <b-row>
          
          <b-col><br>   
           <h2 style="color: cadetblue;"><b>Basic Details</b></h2><br>

 <div>
     
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Add Details" active><b-card-text>
      <form action="">
        <b-row>
          <b-col>
  <div class="form-group">
    <label for="name" style="color: cadetblue;"><b>Vehicle Name:</b></label>
    <input type="text" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="Vehicle Name" >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="owner" style="color: cadetblue;"><b>Owner Name</b></label>
      <input type="text" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="Owner Name" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="plate" style="color: cadetblue;"><b>Traffic Plate Number:</b></label>
        <input type="text" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="Traffic Plate Number" >
      </div></b-col>
      </b-row>
      <b-row>
          <b-col>
  <div class="form-group">
    <label for="tc" style="color: cadetblue;"><b>TC Number:</b></label>
    <input type="text" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="TC Number" >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="Registartion" style="color: cadetblue;"><b>Registartion Date:</b></label>
      <input type="date" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="Registration Date" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="expiry" style="color: cadetblue;"><b>Expiry Date:</b></label>
        <input type="date" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="Expiry Date" >
      </div></b-col>
      </b-row>

      <b-row>
          <b-col>
  <div class="form-group">
    <label for="insurance" style="color: cadetblue;"><b>Insurance Expiry Date:</b></label>
    <input type="date" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder=" Insurance Expiry Date"  >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b>Policy Expiry Date:</b></label>
      <input type="date" class="form-control" id="email" style="background-color: rgb(233, 238, 240);" placeholder="Policy Expiry Date" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="" style="color: cadetblue;"><b></b></label><br>
        <b-button variant="info">Save</b-button>
      </div></b-col>
      </b-row>

  <div class="form-group form-check">
    <label class="form-check-label">
    </label>
  </div>
</form>
      </b-card-text></b-tab>
      <b-tab title="Upload Documents"><b-card-text>
        <cardoc></cardoc>
      </b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
          </b-col>
          
        </b-row>
        </b-jumbotron>
        <br>
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


