module DataAssim
using Test
using LinearAlgebra
using Printf
using Statistics
using DIVAnd
import DIVAnd: pack, unpack


include("models.jl")
include("ensemble.jl")
include("fourDVar.jl")
include("KalmanFilter.jl")
include("TwinExperiment.jl")

export FreeRun, fourDVar, TwinExperiment, LinShallowWater1DModel, KalmanFilter
export AbstractModel, ModelFun
export pack, unpack
export Lorenz63Model
export ModelMatrix
export compact_locfun

end
