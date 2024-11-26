var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = GridMapping","category":"page"},{"location":"#GridMapping","page":"Home","title":"GridMapping","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides the single, simple GridMap type and some associated methods. The typical use is to create a GridMap using a multi-dimensional array of data and bounds for all the dimensions of the region. Then individual values can be extracted by calling the created type with a desired multi-dimensional point. See below for more details and examples.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [GridMapping]","category":"page"},{"location":"#GridMapping.Bounds","page":"Home","title":"GridMapping.Bounds","text":"struct NamedTuple{(:lower, :upper), Tuple{Vector{Float64}, Vector{Float64}}}\n\nThe bounds of the region. Consists of the lower and upper bounds, each a list of floating-point values.\n\n\n\n\n\n","category":"type"},{"location":"#GridMapping.GridMap","page":"Home","title":"GridMapping.GridMap","text":"A general type for holding multi-dimensional data (usually a matrix) along with associated dimension bounds. It's main purpose is to handle the conversion between world coordinates and grid indices internally. Converting between the two representations treats rows as the first variable (x-axis), columns as the second (y-axis), and so on.\n\nIts typical use is to act as a 2D map of some value that can be sampled. A GridMap will return the value of the grid cell that a given point falls within. In other words, the map value is constant within each cell. One can also think of this as a nearest-neighbor approximation.\n\nEach cell index is treated as the center of its cell. Thus the map's lower bounds are at the center of the first cell and the map's upper bounds are at the center of the last cell.\n\nAlso made to function directly like a built-in N-dimensional array by sub-typing and implementing the base methods.\n\nFields:\n\ndata::AbstractArray: N-dimensional array of data\nbounds::@NamedTuple{lower::Vector{Float64}, upper::Vector{Float64}}: vectors of lower and upper bounds, defaults to zeros and ones\n\nA GridMap is constructed by passing the multi-dimensional array of data and the dimension bounds. If no bounds are passed, they default to zeros for lower and ones for upper.\n\nExamples\n\ndata = reshape(1:25, 5, 5)\nbounds = (\n    lower = [0.0, 0.0],\n    upper = [1.0, 1.0]\n)\ngmap = GridMap(data, bounds)\ngmap2 = GridMap(data) # bounds will be zero to one\n\n\n\n\n\n","category":"type"},{"location":"#GridMapping.GridMap-Tuple{Any}","page":"Home","title":"GridMapping.GridMap","text":"A variable of GridMap type can itself be called to retrieve map values. This method accepts a single vector (the location), returns a scalar (the value at that point).\n\nExamples\n\ndata = reshape(1:25, 5, 5)\ngmap = GridMap(data)\n\nx = [.2, .75]\nval = m(x) # returns the value at a single 2D point\nval2 = m[1,4] # can also use as if it's just the underlying matrix\n\n\n\n\n\n","category":"method"},{"location":"#Base.rand-Tuple{GridMap}","page":"Home","title":"Base.rand","text":"rand(gmap::GridMap) -> Tuple{Vector{Float64}, Any}\n\n\nGenerates a random point within the map bounds. Returns a tuple of the location and its value.\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.cellToPoint-Tuple{Any, Any}","page":"Home","title":"GridMapping.cellToPoint","text":"cellToPoint(ci, gmap) -> Any\n\n\nTakes in a CartesianIndex and a GridMap and returns a point in world-coordinates (a vector).\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.checkBounds-Tuple{Any, GridMap}","page":"Home","title":"GridMapping.checkBounds","text":"checkBounds(x, gmap::GridMap) -> Any\n\n\nFunction emits error if location is outside of map bounds.\n\nExamples\n\nx = [.2, .75]\ndata = reshape(1:25, 5, 5)\ngmap = GridMap(data)\ncheckBounds(x, gmap) # no error thrown\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.generateAxes-Tuple{Any}","page":"Home","title":"GridMapping.generateAxes","text":"generateAxes(gmap) -> Tuple{Any, Any}\n\n\nMethod to generate the x, y, etc. axes and points of a GridMap. Useful for plotting.\n\nExamples\n\ndata = reshape(1:25, 5, 5)\ngmap = GridMap(data)\ngenerateAxes(gmap)\n# output: ([0.0:0.25:1.0, 0.0:0.25:1.0], [[0.0, 0.0] [0.0, 0.25] … [1.0, 0.75] [1.0\n, 1.0]])\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.getBounds-Tuple{GridMap}","page":"Home","title":"GridMapping.getBounds","text":"Get the lower and upper bounds of the map.\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.pointToCell-Tuple{Any, Any}","page":"Home","title":"GridMapping.pointToCell","text":"pointToCell(x, gmap) -> Any\n\n\nTakes in a point in world-coordinates (a vector) and a GridMap and returns a CartesianIndex for the underlying array.\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.randomPoint-Tuple{GridMap}","page":"Home","title":"GridMapping.randomPoint","text":"randomPoint(gmap::GridMap) -> Vector{Float64}\n\n\nGenerates a random point in the map. Returns the location.\n\n\n\n\n\n","category":"method"},{"location":"#GridMapping.res-Tuple{Any}","page":"Home","title":"GridMapping.res","text":"res(gmap) -> Any\n\n\nReturns the resolution (distance between cells) for each dimension of the given GridMap as a vector.\n\n\n\n\n\n","category":"method"}]
}
