class UrlMappings {

	static mappings = {
		"/papers"(resources:"questionPaper") 
		"/questions"(resources:"question")
		
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
