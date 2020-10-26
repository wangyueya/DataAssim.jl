var documenterSearchIndex = {"docs":
[{"location":"#DataAssim.jl","page":"DataAssim.jl","title":"DataAssim.jl","text":"","category":"section"},{"location":"","page":"DataAssim.jl","title":"DataAssim.jl","text":"Documentation for DataAssim.jl","category":"page"},{"location":"#Simulation-driver","page":"DataAssim.jl","title":"Simulation driver","text":"","category":"section"},{"location":"","page":"DataAssim.jl","title":"DataAssim.jl","text":"FreeRun\nKalmanFilter\nfourDVar","category":"page"},{"location":"#DataAssim.FreeRun","page":"DataAssim.jl","title":"DataAssim.FreeRun","text":"x,Hx = FreeRun(ℳ,xi,Q,H,nmax,no)\n\nPerforms a free-run with the model ℳ and nmax time-steps starting at the initial condition xi. Observations at the time steps given in no are  extracted with the observation operator H.\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.KalmanFilter","page":"DataAssim.jl","title":"DataAssim.KalmanFilter","text":"x,P = KalmanFilter(xi,Pi,ℳ,Q,yo,R,H,nmax,no)\n\nKalman Filter with the model ℳ and nmax time-steps starting at the initial condition xi and error covariance Pi. Observations yo (and error covariance R) at the time steps given in no are assimilated with the observation operator H.\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.fourDVar","page":"DataAssim.jl","title":"DataAssim.fourDVar","text":"x,J = fourDVar(\n        xi,Pi,ℳ,yo,R,H,nmax,no;\n        innerloops = 10,\n        outerloops = 2,\n        tol = 1e-5)\n\nIncremental 4D-Var with the model ℳ and nmax time-steps starting at the initial condition xi and error covariance Pi with the specified numbers of inner  and outer loops. Observations yo (and error covariance R) at the time steps given in no are assimilated with the observation operator H.\n\n\n\n\n\n","category":"function"},{"location":"#Ensemble-methods","page":"DataAssim.jl","title":"Ensemble methods","text":"","category":"section"},{"location":"","page":"DataAssim.jl","title":"DataAssim.jl","text":"ETKF\nEnKF\nEnSRF\nEAKF\nSEIK\nESTKF\nserialEnSRF\nlocal_ETKF\nlocal_EnKF\nlocal_EnSRF\nlocal_EAKF\nlocal_SEIK\nlocal_ESTKF","category":"page"},{"location":"#DataAssim.ETKF","page":"DataAssim.jl","title":"DataAssim.ETKF","text":"Xa,xa = ETKF(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the ETKF ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.EnKF","page":"DataAssim.jl","title":"DataAssim.EnKF","text":"Xa,xa = EnKF(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the EnKF ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.EnSRF","page":"DataAssim.jl","title":"DataAssim.EnSRF","text":"Xa,xa = EnSRF(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the EnSRF ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.EAKF","page":"DataAssim.jl","title":"DataAssim.EAKF","text":"Xa,xa = EAKF(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the EAKF ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.SEIK","page":"DataAssim.jl","title":"DataAssim.SEIK","text":"Xa,xa = SEIK(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the SEIK ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.ESTKF","page":"DataAssim.jl","title":"DataAssim.ESTKF","text":"Xa,xa = ESTKF(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the ESTKF ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.serialEnSRF","page":"DataAssim.jl","title":"DataAssim.serialEnSRF","text":"Xa,xa = serialEnSRF(Xf,HXf,y,R,H,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf and observations y using the serialEnSRF ensemble scheme.\n\nInput arguments:\n\nXf: forecast ensemble (n x N)\nHXf: the observation operator applied on the ensemble (product H*Xf)\ny: observations (m)\nR: observation error covariance  (m x m).\nH: operator (m x n). Except for the serialEnSRF it is never used and can be empty\n\nOptional keywords arguments:\n\ndebug: set to true to enable debugging. Default (false) is no debugging.\ntolerance: expected rounding error (default 1e-10) for debugging checks. This is not used if debug is false.\n\nOutput arguments:\n\nXa: the analysis ensemble (n x N)\nxa: the analysis ensemble mean (n)\n\nNotations follows: Sangoma D3.1 http://data-assimilation.net/Documents/sangomaDL3.1.pdf\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.local_ETKF","page":"DataAssim.jl","title":"DataAssim.local_ETKF","text":"Xa,xa = local_ETKF(Xf,H,y,diagR,part,selectObs,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf using the observation y using the local ETKF.\n\nInputs:\n\nXf: forecast ensemble (n x N)\nH: observation operator (m x n)\ny: observation (m x 1)\ndiagR: diagonal of the observation error covariance R (m x 1)\npart: vector of integer \"labels\". Every element of the state vector with the same number belong to the same subdomain\nselectObs: callback routine to select observations with a within a subdomain. As input is takes an integer representing the index of the state vector and returns a vector of weights (m x 1). For example:\n\n     selectObs(i) = exp(- ((x[i] - xobs[:]).^2 + (y(i) - yobs[:]).^2)/L^2 );\n\nor\n\n     selectObs(i) = compact_locfun(L,...\n         sqrt((x[i] - xobs[:]).^2 + (y[i] - yobs[:]).^2));\n\nwhere x and y is the horizontal model grid, xobs and yobs are the locations of the observations and L is a correlation length-scale\n\nOptional inputs:\n\ndisplay: if true, then display progress (false is the default)\nminweight: analysis is performed using observations for which  weights is larger than minweight. (default 1e-8)\nHXf: if non empty, then it is the product H*Xf. In this case, H is not  used\n\nOutput:\n\nXa: the analysis ensemble (n x N)\nxa`: the analysis ensemble mean (n x 1)\n\nSee also: compact_locfun\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.local_EnKF","page":"DataAssim.jl","title":"DataAssim.local_EnKF","text":"Xa,xa = local_EnKF(Xf,H,y,diagR,part,selectObs,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf using the observation y using the local EnKF.\n\nInputs:\n\nXf: forecast ensemble (n x N)\nH: observation operator (m x n)\ny: observation (m x 1)\ndiagR: diagonal of the observation error covariance R (m x 1)\npart: vector of integer \"labels\". Every element of the state vector with the same number belong to the same subdomain\nselectObs: callback routine to select observations with a within a subdomain. As input is takes an integer representing the index of the state vector and returns a vector of weights (m x 1). For example:\n\n     selectObs(i) = exp(- ((x[i] - xobs[:]).^2 + (y(i) - yobs[:]).^2)/L^2 );\n\nor\n\n     selectObs(i) = compact_locfun(L,...\n         sqrt((x[i] - xobs[:]).^2 + (y[i] - yobs[:]).^2));\n\nwhere x and y is the horizontal model grid, xobs and yobs are the locations of the observations and L is a correlation length-scale\n\nOptional inputs:\n\ndisplay: if true, then display progress (false is the default)\nminweight: analysis is performed using observations for which  weights is larger than minweight. (default 1e-8)\nHXf: if non empty, then it is the product H*Xf. In this case, H is not  used\n\nOutput:\n\nXa: the analysis ensemble (n x N)\nxa`: the analysis ensemble mean (n x 1)\n\nSee also: compact_locfun\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.local_EnSRF","page":"DataAssim.jl","title":"DataAssim.local_EnSRF","text":"Xa,xa = local_EnSRF(Xf,H,y,diagR,part,selectObs,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf using the observation y using the local EnSRF.\n\nInputs:\n\nXf: forecast ensemble (n x N)\nH: observation operator (m x n)\ny: observation (m x 1)\ndiagR: diagonal of the observation error covariance R (m x 1)\npart: vector of integer \"labels\". Every element of the state vector with the same number belong to the same subdomain\nselectObs: callback routine to select observations with a within a subdomain. As input is takes an integer representing the index of the state vector and returns a vector of weights (m x 1). For example:\n\n     selectObs(i) = exp(- ((x[i] - xobs[:]).^2 + (y(i) - yobs[:]).^2)/L^2 );\n\nor\n\n     selectObs(i) = compact_locfun(L,...\n         sqrt((x[i] - xobs[:]).^2 + (y[i] - yobs[:]).^2));\n\nwhere x and y is the horizontal model grid, xobs and yobs are the locations of the observations and L is a correlation length-scale\n\nOptional inputs:\n\ndisplay: if true, then display progress (false is the default)\nminweight: analysis is performed using observations for which  weights is larger than minweight. (default 1e-8)\nHXf: if non empty, then it is the product H*Xf. In this case, H is not  used\n\nOutput:\n\nXa: the analysis ensemble (n x N)\nxa`: the analysis ensemble mean (n x 1)\n\nSee also: compact_locfun\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.local_EAKF","page":"DataAssim.jl","title":"DataAssim.local_EAKF","text":"Xa,xa = local_EAKF(Xf,H,y,diagR,part,selectObs,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf using the observation y using the local EAKF.\n\nInputs:\n\nXf: forecast ensemble (n x N)\nH: observation operator (m x n)\ny: observation (m x 1)\ndiagR: diagonal of the observation error covariance R (m x 1)\npart: vector of integer \"labels\". Every element of the state vector with the same number belong to the same subdomain\nselectObs: callback routine to select observations with a within a subdomain. As input is takes an integer representing the index of the state vector and returns a vector of weights (m x 1). For example:\n\n     selectObs(i) = exp(- ((x[i] - xobs[:]).^2 + (y(i) - yobs[:]).^2)/L^2 );\n\nor\n\n     selectObs(i) = compact_locfun(L,...\n         sqrt((x[i] - xobs[:]).^2 + (y[i] - yobs[:]).^2));\n\nwhere x and y is the horizontal model grid, xobs and yobs are the locations of the observations and L is a correlation length-scale\n\nOptional inputs:\n\ndisplay: if true, then display progress (false is the default)\nminweight: analysis is performed using observations for which  weights is larger than minweight. (default 1e-8)\nHXf: if non empty, then it is the product H*Xf. In this case, H is not  used\n\nOutput:\n\nXa: the analysis ensemble (n x N)\nxa`: the analysis ensemble mean (n x 1)\n\nSee also: compact_locfun\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.local_SEIK","page":"DataAssim.jl","title":"DataAssim.local_SEIK","text":"Xa,xa = local_SEIK(Xf,H,y,diagR,part,selectObs,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf using the observation y using the local SEIK.\n\nInputs:\n\nXf: forecast ensemble (n x N)\nH: observation operator (m x n)\ny: observation (m x 1)\ndiagR: diagonal of the observation error covariance R (m x 1)\npart: vector of integer \"labels\". Every element of the state vector with the same number belong to the same subdomain\nselectObs: callback routine to select observations with a within a subdomain. As input is takes an integer representing the index of the state vector and returns a vector of weights (m x 1). For example:\n\n     selectObs(i) = exp(- ((x[i] - xobs[:]).^2 + (y(i) - yobs[:]).^2)/L^2 );\n\nor\n\n     selectObs(i) = compact_locfun(L,...\n         sqrt((x[i] - xobs[:]).^2 + (y[i] - yobs[:]).^2));\n\nwhere x and y is the horizontal model grid, xobs and yobs are the locations of the observations and L is a correlation length-scale\n\nOptional inputs:\n\ndisplay: if true, then display progress (false is the default)\nminweight: analysis is performed using observations for which  weights is larger than minweight. (default 1e-8)\nHXf: if non empty, then it is the product H*Xf. In this case, H is not  used\n\nOutput:\n\nXa: the analysis ensemble (n x N)\nxa`: the analysis ensemble mean (n x 1)\n\nSee also: compact_locfun\n\n\n\n\n\n","category":"function"},{"location":"#DataAssim.local_ESTKF","page":"DataAssim.jl","title":"DataAssim.local_ESTKF","text":"Xa,xa = local_ESTKF(Xf,H,y,diagR,part,selectObs,...)\n\nComputes analysis ensemble Xa based on forecast ensemble Xf using the observation y using the local ESTKF.\n\nInputs:\n\nXf: forecast ensemble (n x N)\nH: observation operator (m x n)\ny: observation (m x 1)\ndiagR: diagonal of the observation error covariance R (m x 1)\npart: vector of integer \"labels\". Every element of the state vector with the same number belong to the same subdomain\nselectObs: callback routine to select observations with a within a subdomain. As input is takes an integer representing the index of the state vector and returns a vector of weights (m x 1). For example:\n\n     selectObs(i) = exp(- ((x[i] - xobs[:]).^2 + (y(i) - yobs[:]).^2)/L^2 );\n\nor\n\n     selectObs(i) = compact_locfun(L,...\n         sqrt((x[i] - xobs[:]).^2 + (y[i] - yobs[:]).^2));\n\nwhere x and y is the horizontal model grid, xobs and yobs are the locations of the observations and L is a correlation length-scale\n\nOptional inputs:\n\ndisplay: if true, then display progress (false is the default)\nminweight: analysis is performed using observations for which  weights is larger than minweight. (default 1e-8)\nHXf: if non empty, then it is the product H*Xf. In this case, H is not  used\n\nOutput:\n\nXa: the analysis ensemble (n x N)\nxa`: the analysis ensemble mean (n x 1)\n\nSee also: compact_locfun\n\n\n\n\n\n","category":"function"},{"location":"#Models","page":"DataAssim.jl","title":"Models","text":"","category":"section"},{"location":"","page":"DataAssim.jl","title":"DataAssim.jl","text":"AbstractModel\nModelMatrix\nModelFun\nLinShallowWater1DModel\nLorenz63Model","category":"page"},{"location":"#DataAssim.AbstractModel","page":"DataAssim.jl","title":"DataAssim.AbstractModel","text":"Abstract base-class of models. A model should implement forecast step, tangent-linear and adjoint step\n\n\n\n\n\n","category":"type"},{"location":"#DataAssim.ModelMatrix","page":"DataAssim.jl","title":"DataAssim.ModelMatrix","text":"ℳ = ModelMatrix(M)\n\nLinear model defined by the matrix M.\n\n\n\n\n\n","category":"type"},{"location":"#DataAssim.ModelFun","page":"DataAssim.jl","title":"DataAssim.ModelFun","text":"ℳ = ModelFun(nonlinear_forecast,tangent_linear_model,adjoint_model)\n\nModel defined by the functions nonlinear_forecast,tangent_linear_model and  adjoint_model.\n\n\n\n\n\n","category":"type"},{"location":"#DataAssim.LinShallowWater1DModel","page":"DataAssim.jl","title":"DataAssim.LinShallowWater1DModel","text":"ℳ = LinShallowWater1DModel(dt,g,h,L,imax)\n\nLinear 1D shallow water model.\n\nExample\n\ndt = 1.\ng = 9.81\nh = 100\nimax = 101\nL = 10000\nLinShallowWater1DModel(dt,g,h,L,imax)\n\n\n\n\n\n","category":"type"},{"location":"#DataAssim.Lorenz63Model","page":"DataAssim.jl","title":"DataAssim.Lorenz63Model","text":"ℳ = Lorenz63Model(dt,σ=10.,β = 8/3.,ρ = 28.)\n\nLorenz, 1963 model[1] integrated with a 2nd order Runge-Kutta scheme.\n\n[1] https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2\n\n\n\n\n\n","category":"type"},{"location":"#Utility-functions","page":"DataAssim.jl","title":"Utility functions","text":"","category":"section"},{"location":"","page":"DataAssim.jl","title":"DataAssim.jl","text":"compact_locfun","category":"page"},{"location":"#DataAssim.compact_locfun","page":"DataAssim.jl","title":"DataAssim.compact_locfun","text":" fun = compact_locfun(r)\n\nSmooth compact localization function at the (scaled) distance r. fun is zero if r > 2 and one if r is 0. (Gaspari et al. (1999), equation 4.10, [1])\n\n[1] http://dx.doi.org/10.1002/qj.49712555417\n\n\n\n\n\n","category":"function"}]
}
