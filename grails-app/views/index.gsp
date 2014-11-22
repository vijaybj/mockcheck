<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<title>Banking Examination Practice Tests</title>

<asset:stylesheet
	href="http://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css" />
<asset:stylesheet href="bootstrap-combined.no-icons.min.css" />
<asset:stylesheet href="mockcheck.css" />


<asset:javascript src="jquery-1.10.2.min.js" />
<asset:javascript src="handlebars-1.0.0.js" />
<asset:javascript src="ember.js" />
<asset:javascript src="ember-data.js" />
<asset:javascript src="localstorage_adapter.js" />
<asset:javascript src="application.js" />


<style type="text/css">
ul.questions-nav li .attempted {
	background-color: red;
}
</style>
</head>
<body>

	<script type="text/x-handlebars">
	<table width="100%" height="100%" align="center" class="menubar">
		<tr>
			<td width="14%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			<td width="170px"><span class="logo-text"><asset:image src="logo.png" width="200px" style="margin-bottom:6px;margin-right:0px;"/>
				</span></td>
			<td style="vertical-align:middle;">
        		<ul class="nav-bar">
					{{#each tab in model}}
						{{#link-to tab.name tagName="li" href=false}}{{tab.title}}{{/link-to}}
	         		{{/each}}
        		</ul>
			</td>
			<td width=14%>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		</tr>
	</table>

	<table width="72%" height="100px" align="center">
		<tr>
		<td align="center">{{outlet}}</td>
		</tr>
		<tr class="footer">
			<td colspan="2" align="center"><hr>&copy;2014 www.mockcheck.com | <a href="mailto:support@mockcheck.com">Support</a> | 
			<a href="mailto:feedback@mockcheck.com">Feedback</a></td>
		</tr>
	</table>
  </script>

	<script type="text/x-handlebars" id="papers">
    <div class="container-fluid height-500">
        <ul class="sub-menu">
			{{#each paper in model}}
				{{#link-to 'paper' paper.id tagName="li" href=false}}{{paper.title}}{{/link-to}}
			{{/each}}
        </ul>
		{{outlet}}
	</div>
  </script>

	<script type="text/x-handlebars" id="papers/index">
		<table width="100%" align="middle" style="min-height: 500px;">
			<tr>
				<td width="100%" align="center"><button class="btn btn-large btn-default" {{action 'startTest'}}>Start the test >></button></td>
			</tr>
		</table>
</script>

<script type="text/x-handlebars" id="paper">
	<div class="container-fluid">
		<table class="width_100per">
		<tr>
			<td class="valign-top">
      			<div class="status-info-panel height-400 sidebar">
            		<table class="width_100per">
						<tr>
							{{outlet}}
						</tr>
					</table>
        		</div>
			</td>
		</tr>
		</table>
    </div>
</script>

<script type="text/x-handlebars" id="questions">
	<td class="width_75per valign-top" style="padding-right: 10px;">{{outlet}}</td>
	<td class=" valign-top" style="padding: 5px 10px 0px 15px; border-left: 1px solid lightgray;">
	<div class="status-bar">Time left: {{refresh secondsViewed}}</div>
	<div class="status-bar">{{controllers.paper.title}}</div> 
	<hr/>
		<ul class="questions-navbar">
			{{#each question in controller}}
				 {{#link-to 'question' question.id class=statusClass tagName="li" href=false}}{{question.index}}{{/link-to}}
			{{/each}}
		</ul>
	</td>
</script>

<script type="text/x-handlebars" id="question">
    <div class="question-panel">Q. {{index}}: {{statement}}</div>
	<hr>
	<div class="options-panel">
		
		{{#each option in options}}
		<label>
        	{{view Ember.RadioButton class="option-radio" style="margin-right: 10px;margin-bottom: 5px;" name="ansOption" selectionBinding="selectedOption" value=option.index}}
        	{{option.statement}}
    	</label>
		{{/each}}
	</div>
	<br/><br/><br/><br/><br/>
    <hr>
	&nbsp;&nbsp;&nbsp;<button class="btn btn-success" {{action 'submit' selectedOption this}} >Submit Answer</button>&nbsp;&nbsp;&nbsp;
	<button class="btn btn-warning" {{action 'markForReview' selectedOption this}}>Mark For Review & Next</button>
	<button class="btn btn-default pull-right" style="margin-right:10px;" {{action 'clearResponse' selectedOption this}}>Clear Response</button>
</script>

<script type="text/x-handlebars" id="home">
	<div class="container-fluid height-500">
    <table class=""width="100%" height="500px;">
		<tr>
		<td align="left" width="30%"  class="valign-top">
			<asset:image src="exam.jpg" style="padding: 10px 0px 10px 10px;width: 250px;"/>		
		</td>
		<td align="left" class="valign-top">
			<div class="margin-20">
				<p>
					Mockcheck.com is committed in helping you preapare for the real challenge of <b>Banking Clerical</b> (common written) examinations.
					Currently we have practice tests available for following subjects:
					<ul>
					 	<li>General Awareness</li>
						<li>English Language</li>
						<li>Reasoning</li>
						<li>Quantitative Aptitude</li>
						<li>Computer & Marketing Knowledge</li>
					</ul>
				</p>
			<%--	<p>
					<div id="controller-list" role="navigation">
						<h2>Available Controllers:</h2>
						<ul>
							<g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName } }">
								<li class="controller"><g:link controller="${c.logicalPropertyName}">${c.fullName}</g:link></li>
							</g:each>
						</ul>
					</div>
				</p> --%>

			</div>
		</td>
		</tr>
	</table>
 	</div>
</script>


<script type="text/x-handlebars" id="index">
	{{comming-soon}}
</script>

<script type="text/x-handlebars" id="about">
	{{comming-soon}}
</script>

<script type="text/x-handlebars" id="discuss">
	{{comming-soon}}
</script>

	<script type="text/x-handlebars" id="contact-us">
	{{comming-soon}}
  </script>

	<script type="text/x-handlebars" id="enroll">
	{{comming-soon}}
  </script>

	<script type="text/x-handlebars" id="sign-up">
	{{comming-soon}}
  </script>

	<script type="text/x-handlebars" id="sign-in">
	{{comming-soon}}
  </script>

<script type="text/x-handlebars" id="components/comming-soon">
    <div class='about'>
    <table align="center" width="100%" height="500px;">
		<tr>
		<td align="left" width="30%">
			<asset:image style="padding: 10px 0px 10px 10px;" src="exam.jpg" />
		</td>
		<td align="left">		
			<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comming Soon!!!</h4>
		</td>
		</tr>
	</table>
    </div>
</script>

<script type="text/x-handlebars" data-template-name="loading">
  <div class="loading-pane">
    <div class="loading-message">
      Please wait...
    <div class="spinner"></div>
    </div>
  </div>
</script>

</body>
</html>
