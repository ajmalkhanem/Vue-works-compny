
    <template> 
<div>
        

                <div>
    
                    <b-navbar toggleable="lg" type="dark" variant="info">
                      <b-navbar-brand href="#"><b>CloudGM</b></b-navbar-brand>
                  
                      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                  
                      <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                          <b-nav-item href="#">Link</b-nav-item>
                          <b-nav-item href="#" >Disabled</b-nav-item>
                          <b-nav-item href="#" >Disabled</b-nav-item>
                          <b-nav-item href="#" >Disabled</b-nav-item>
                          <b-nav-item href="#" >Disabled</b-nav-item>
                          <b-nav-item href="#" >Disabled</b-nav-item>
                          <b-nav-item href="#" >Disabled</b-nav-item>
    
                          <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                          </b-nav-item-dropdown>
                        </b-navbar-nav>
                  
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                          <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                          </b-nav-form>
                  
                          
                  
                          <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template slot="button-content">User</template>
                            <b-dropdown-item><router-link to="/login" ><label>Sign In</label></router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/signup" ><label>Sign Up</label></router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/signup" ><label>Sign Up(business)</label></router-link></b-dropdown-item>
                          </b-nav-item-dropdown>
                        </b-navbar-nav>
                      </b-collapse>
                    </b-navbar>
                  </div><hr>
                    
                    
                        
                
                    <div class="container">
                        <div class="jumbotron">
                            <h1>Market Place</h1>
                            <p class="lead">Moreover, instead of plain text, you can also place your logo image inside the navbar. However, you need to set the logo height manually to fit it properly inside the navbar, as shown here:</p>
                            <p><router-link to="login" target="_blank" class="btn btn-success btn-lg">Sell your product</router-link></p>
                        </div>
                        <div class="jumbotron">
                            <hooper></hooper>
                        </div>
                       
                            
                            
                            
                        
                        <footer><hr>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Copyright © 2019 </p>
                                </div>
                                <div class="col-md-6 text-md-right">
                                    <a href="#" class="text-dark">Terms of Use</a> 
                                    <span class="text-muted mx-2">|</span> 
                                    <a href="#" class="text-dark">Privacy Policy</a>
                                </div>
                            </div>
                        </footer>
                    </div>
    
                    
                
            </div></template>
            <script>
                    import Hooper from "./Hooper";  
                    import list from '@/components/list'
                  
                    export default {
                      name: 'App',
                      components: {
                        Hooper,
                        list
                        
                      }
                    }
                  </script>
            <style>
            /* Styles for wrapping the search box */
    
    .main {
        width: 30%;
        margin: 50px auto;
    }
    
    /* Bootstrap 4 text input with search icon */
    
    .has-search .form-control {
        padding-left: 2.375rem;
    }
    
    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: #aaa;
    }</style>
        