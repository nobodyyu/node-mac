Ext.data.JsonP.nodemac_Daemon({"tagname":"class","name":"nodemac.Daemon","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Corey Butler"]},"private":null,"id":"class-nodemac.Daemon","members":{"cfg":[{"name":"abortOnError","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-abortOnError"},{"name":"cwd","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-cwd"},{"name":"description","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-description"},{"name":"env","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-env"},{"name":"grow","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-grow"},{"name":"logpath","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-logpath"},{"name":"maxRestarts","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-maxRestarts"},{"name":"maxRetries","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-maxRetries"},{"name":"name","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-name"},{"name":"script","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-script"},{"name":"wait","tagname":"cfg","owner":"nodemac.Daemon","meta":{},"id":"cfg-wait"}],"property":[{"name":"exists","tagname":"property","owner":"nodemac.Daemon","meta":{"readonly":true},"id":"property-exists"},{"name":"id","tagname":"property","owner":"nodemac.Daemon","meta":{"readonly":true},"id":"property-id"},{"name":"name","tagname":"property","owner":"nodemac.Daemon","meta":{},"id":"property-name"}],"method":[{"name":"install","tagname":"method","owner":"nodemac.Daemon","meta":{},"id":"method-install"},{"name":"restart","tagname":"method","owner":"nodemac.Daemon","meta":{},"id":"method-restart"},{"name":"start","tagname":"method","owner":"nodemac.Daemon","meta":{},"id":"method-start"},{"name":"stop","tagname":"method","owner":"nodemac.Daemon","meta":{},"id":"method-stop"},{"name":"uninstall","tagname":"method","owner":"nodemac.Daemon","meta":{},"id":"method-uninstall"}],"event":[{"name":"doesnotexist","tagname":"event","owner":"nodemac.Daemon","meta":{},"id":"event-doesnotexist"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"daemon.js","href":"daemon.html#nodemac-Daemon"}],"html_meta":{"author":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/daemon.html#nodemac-Daemon' target='_blank'>daemon.js</a></div></pre><div class='doc-contents'><p>Manage node.js scripts as native Mac daemons.</p>\n\n<pre><code>var Service = require('node-mac').Service;\n\n// Create a new service object\nvar svc = new Service({\n  name:'Hello World',\n  description: 'The nodejs.org example web server.',\n  script: '/path/to/helloworld.js')\n});\n\n// Listen for the \"install\" event, which indicates the\n// process is available as a service.\nsvc.on('install',function(){\n  svc.start();\n});\n\nsvc.install();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-abortOnError' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-abortOnError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-abortOnError' class='name expandable'>abortOnError</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Setting this to true will force the process to exit if it encounters an error that stops the node.js script from runn...</div><div class='long'><p>Setting this to <code>true</code> will force the process to exit if it encounters an error that stops the node.js script from running.\nThis does not mean the process will stop if the script throws an error. It will only abort if the\nscript throws an error causing the process to exit (i.e. <code>process.exit(1)</code>).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-cwd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-cwd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-cwd' class='name expandable'>cwd</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The absolute path of the current working directory. ...</div><div class='long'><p>The absolute path of the current working directory. Defaults to the base directory of <a href=\"#!/api/nodemac.Daemon-cfg-script\" rel=\"nodemac.Daemon-cfg-script\" class=\"docClass\">script</a>.</p>\n</div></div></div><div id='cfg-description' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-description' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-description' class='name expandable'>description</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Description of the service. ...</div><div class='long'><p>Description of the service.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-env' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-env' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-env' class='name expandable'>env</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>An optional array or object used to pass environment variables to the node.js script. ...</div><div class='long'><p>An optional array or object used to pass environment variables to the node.js script.\nYou can do this by setting environment variables in the service config, as shown below:</p>\n\n<pre><code>var svc = new Service({\n name:'Hello World',\n description: 'The nodejs.org example web server.',\n script: '/path/to/helloworld.js',\n env: {\n   name: \"NODE_ENV\",\n   value: \"production\"\n }\n});\n</code></pre>\n\n<p>You can also supply an array to set multiple environment variables:</p>\n\n<pre><code>var svc = new Service({\n name:'Hello World',\n description: 'The nodejs.org example web server.',\n script: '/path/to/helloworld.js',\n env: [{\n   name: \"HOME\",\n   value: process.env[\"USERPROFILE\"] // Access the user home directory\n },{\n   name: \"NODE_ENV\",\n   value: \"production\"\n }]\n});\n</code></pre>\n</div></div></div><div id='cfg-grow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-grow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-grow' class='name expandable'>grow</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>A number between 0-1 representing the percentage growth rate for the wait interval. ...</div><div class='long'><p>A number between 0-1 representing the percentage growth rate for the <a href=\"#!/api/nodemac.Daemon-cfg-wait\" rel=\"nodemac.Daemon-cfg-wait\" class=\"docClass\">wait</a> interval.\nSetting this to anything other than <code>0</code> allows the process to increase it's wait period\non every restart attempt. If a process dies fatally, this will prevent the server from\nrestarting the process too rapidly (and too strenuously).</p>\n<p>Defaults to: <code>.25</code></p></div></div></div><div id='cfg-logpath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-logpath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-logpath' class='name expandable'>logpath</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The root directory where the log will be stored. ...</div><div class='long'><p>The root directory where the log will be stored.</p>\n<p>Defaults to: <code>/Library/Logs/node-scripts</code></p></div></div></div><div id='cfg-maxRestarts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-maxRestarts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-maxRestarts' class='name expandable'>maxRestarts</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The maximum number of restarts within a 60 second period before haulting the process. ...</div><div class='long'><p>The maximum number of restarts within a 60 second period before haulting the process.\nThis cannot be <em>disabled</em>, but it can be rendered ineffective by setting a value of <code>0</code>.</p>\n<p>Defaults to: <code>3</code></p></div></div></div><div id='cfg-maxRetries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-maxRetries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-maxRetries' class='name expandable'>maxRetries</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The maximum number of restart attempts to make before the service is considered non-responsive/faulty. ...</div><div class='long'><p>The maximum number of restart attempts to make before the service is considered non-responsive/faulty.\nIgnored by default.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-name' class='name expandable'>name</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The descriptive name of the process, i.e. ...</div><div class='long'><p>The descriptive name of the process, i.e. <code>My Process</code>.</p>\n</div></div></div><div id='cfg-script' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-script' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-script' class='name expandable'>script</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The absolute path of the script to launch as a service. ...</div><div class='long'><p>The absolute path of the script to launch as a service.\n@required</p>\n</div></div></div><div id='cfg-wait' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-cfg-wait' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-cfg-wait' class='name expandable'>wait</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The initial number of seconds to wait before attempting a restart (after the script stops). ...</div><div class='long'><p>The initial number of seconds to wait before attempting a restart (after the script stops).</p>\n<p>Defaults to: <code>1</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-exists' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-property-exists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-property-exists' class='name not-expandable'>exists</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Indicates that the service exists.</p>\n</div><div class='long'><p>Indicates that the service exists.</p>\n</div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-property-id' class='name not-expandable'>id</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The ID for the process.</p>\n</div><div class='long'><p>The ID for the process.</p>\n</div></div></div><div id='property-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-property-name' class='name not-expandable'>name</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The name of the process.</p>\n</div><div class='long'><p>The name of the process.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-install' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-method-install' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-method-install' class='name expandable'>install</a>( <span class='pre'>[callback]</span> )</div><div class='description'><div class='short'>Install the script as a background process/daemon. ...</div><div class='long'><p>Install the script as a background process/daemon.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-restart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-method-restart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-method-restart' class='name expandable'>restart</a>( <span class='pre'>[callback]</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-method-start' class='name expandable'>start</a>( <span class='pre'>[callback]</span> )</div><div class='description'><div class='short'>Start and/or create a daemon. ...</div><div class='long'><p>Start and/or create a daemon.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-method-stop' class='name expandable'>stop</a>( <span class='pre'>[callback]</span> )</div><div class='description'><div class='short'>Stop the process if it is currently running. ...</div><div class='long'><p>Stop the process if it is currently running.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-uninstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-method-uninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-method-uninstall' class='name expandable'>uninstall</a>( <span class='pre'>[callback]</span> )</div><div class='description'><div class='short'>Uninstall an existing background process/daemon. ...</div><div class='long'><p>Uninstall an existing background process/daemon.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Executed when the process is uninstalled.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-doesnotexist' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='nodemac.Daemon'>nodemac.Daemon</span><br/><a href='source/daemon.html#nodemac-Daemon-event-doesnotexist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/nodemac.Daemon-event-doesnotexist' class='name expandable'>doesnotexist</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when an attempt to uninstall the service fails because it does not exist. ...</div><div class='long'><p>Fired when an attempt to uninstall the service fails because it does not exist.</p>\n</div></div></div></div></div></div></div>"});