package com.mockcheck.exam

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class UserController {

    def index() {
		render 'secure access only!'
	}
}
