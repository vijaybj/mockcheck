package com.mockcheck.exam

import org.bson.types.ObjectId


class Question {
	String id
	Integer index
	String statement
	String status
	//Integer subjectId
	List<OptionItem> options
	
	static embedded = ['optionItem', 'options']
/*	static hasMany = [options: OptionItem]
	static mapping = { childs lazy: false }*/
}
