function Login() {
  return (
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg p-8">          
          <form className="space-y-8">
            {/* Form Fields in Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Labels Column */}
              <div className="md:col-span-1 space-y-10 pt-2">
                <label htmlFor="username" className="block text-gray-700 font-medium">
                  Username
                </label>
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password
                </label>
              </div>
              
              {/* Inputs Column */}
              <div className="md:col-span-3 space-y-6">
                <input 
                  type="text" 
                  id="username" 
                  required 
                  placeholder="Enter username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="password" 
                  id="password" 
                  required 
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Actions - Full width on mobile, aligned on desktop */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-gray-600">Remember me</span>
              </label>
              
              <button 
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;