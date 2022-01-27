---------------
#steps

add workspace

#add app

nx generate @nrwl/angular:app third

#add webpack config

ng add @angular-architects/module-federation --project third --port 4209
also (AppModule change to RouterModule.forChild)

--------------
# NxMicroFrontend

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

