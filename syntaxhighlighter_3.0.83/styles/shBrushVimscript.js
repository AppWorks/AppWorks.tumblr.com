
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>scripts/shBrushVimscript.js at master from nelstrom/SyntaxHighlighter - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://d3nwyuy0nl342s.cloudfront.net/8559eed2fcaf094dfc156ac9adcabc9eb4a8a0a5/stylesheets/bundle_common.css" media="screen" rel="stylesheet" type="text/css" />
<link href="https://d3nwyuy0nl342s.cloudfront.net/8559eed2fcaf094dfc156ac9adcabc9eb4a8a0a5/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://d3nwyuy0nl342s.cloudfront.net'
      }
      var github_user = 'AppWorks'
      
    </script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/8559eed2fcaf094dfc156ac9adcabc9eb4a8a0a5/javascripts/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/8559eed2fcaf094dfc156ac9adcabc9eb4a8a0a5/javascripts/bundle_common.js" type="text/javascript"></script>
<script src="https://d3nwyuy0nl342s.cloudfront.net/8559eed2fcaf094dfc156ac9adcabc9eb4a8a0a5/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "nelstrom/SyntaxHighlighter"
      })
    </script>

    
  <link href="https://github.com/nelstrom/SyntaxHighlighter/commits/master.atom" rel="alternate" title="Recent Commits to SyntaxHighlighter:master" type="application/atom+xml" />

        <meta name="description" content="Includes Vimscript Brush and Blackboard Theme for Alex Gorbatchev's SyntaxHighlighter project" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "nelstrom/SyntaxHighlighter";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "50f3a7e1f4f7d9e8103e5847323508beae529491";
      GitHub.currentPath = 'scripts/shBrushVimscript.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_in page-blob">
    

    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com/">
            <img alt="github" class="default" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3-hover.png" />
            <!--<![endif]-->
          </a>
        
        
          





  
    <div class="userbox">
      <div class="avatarname">
        <a href="https://github.com/AppWorks"><img src="https://secure.gravatar.com/avatar/bba1687eb3c576f80c0e5a13279912cc?s=140&d=https://d3nwyuy0nl342s.cloudfront.net%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="20" height="20"  /></a>
        <a href="https://github.com/AppWorks" class="name">AppWorks</a>

        
        
      </div>
      <ul class="usernav">
        <li><a href="https://github.com/">Dashboard</a></li>
        <li>
          
          <a href="https://github.com/inbox">Inbox</a>
          <a href="https://github.com/inbox" class="unread_count ">0</a>
        </li>
        <li><a href="https://github.com/account">Account Settings</a></li>
                <li><a href="/logout">Log Out</a></li>
      </ul>
    </div><!-- /.userbox -->
  


        
        <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <input type="search" class="search my_repos_autocompleter" name="q" results="5" placeholder="Search&hellip;" /> <input type="submit" value="Search" class="button" />
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
    <ul class="nav">
      <li><a href="/explore">Explore GitHub</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/nelstrom">nelstrom</a> / <strong><a href="https://github.com/nelstrom/SyntaxHighlighter">SyntaxHighlighter</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/nelstrom/SyntaxHighlighter/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/nelstrom/SyntaxHighlighter/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '20cc176b5b0af3c7c30722af0ef185d251aa2457'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/nelstrom/SyntaxHighlighter/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '20cc176b5b0af3c7c30722af0ef185d251aa2457'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/nelstrom/SyntaxHighlighter/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '20cc176b5b0af3c7c30722af0ef185d251aa2457'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          <li id='pull_request_item' class='nspr' style='display:none'><a href="/nelstrom/SyntaxHighlighter/pull/new/master" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/nelstrom/SyntaxHighlighter/watchers" title="Watchers" class="tooltipped downwards">6</a></li>
          <li class="forks"><a href="/nelstrom/SyntaxHighlighter/network" title="Forks" class="tooltipped downwards">1</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="https://github.com/nelstrom/SyntaxHighlighter" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="https://github.com/nelstrom/SyntaxHighlighter/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/nelstrom/SyntaxHighlighter/network" highlight="repo_network">Network</a></li>
    <li><a href="/nelstrom/SyntaxHighlighter/pulls" highlight="repo_pulls">Pull Requests (0)</a></li>

    

    
      
      <li><a href="/nelstrom/SyntaxHighlighter/issues" highlight="issues">Issues (0)</a></li>
    

            
    <li><a href="/nelstrom/SyntaxHighlighter/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      
      <a href="/nelstrom/SyntaxHighlighter/branches" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/nelstrom/SyntaxHighlighter/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/nelstrom/SyntaxHighlighter/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>Includes Vimscript Brush and Blackboard Theme for Alex Gorbatchev's SyntaxHighlighter project
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/nelstrom/SyntaxHighlighter/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="20cc176b5b0af3c7c30722af0ef185d251aa2457" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="Includes Vimscript Brush and Blackboard Theme for Alex Gorbatchev's SyntaxHighlighter project">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://" rel="nofollow"></a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/nelstrom/SyntaxHighlighter/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="20cc176b5b0af3c7c30722af0ef185d251aa2457" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="https://github.com/nelstrom/SyntaxHighlighter.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/nelstrom/SyntaxHighlighter.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/nelstrom/SyntaxHighlighter">SyntaxHighlighter</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/nelstrom/SyntaxHighlighter/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      

  





<script type="text/javascript">
  GitHub.downloadRepo = '/nelstrom/SyntaxHighlighter/archives/master'
  GitHub.revType = "master"

  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  
    GitHub.hasWriteAccess = false
    GitHub.hasAdminAccess = false
    GitHub.watchingRepo = false
    GitHub.ignoredRepo = false
    GitHub.hasForkOfRepo = ""
    GitHub.hasForked = false
  

  
</script>






<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/nelstrom/SyntaxHighlighter/commit/50f3a7e1f4f7d9e8103e5847323508beae529491">Tidied up the expander.rb script.</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/802afd5856ed0054d7d1851ea21cbabe?s=140&d=https://d3nwyuy0nl342s.cloudfront.net%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/nelstrom">nelstrom</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2010-04-29 09:41:13">Thu Apr 29 09:41:13 -0700 2010</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/nelstrom/SyntaxHighlighter/commit/50f3a7e1f4f7d9e8103e5847323508beae529491" hotkey="c">50f3a7e1f4f7d9e8103e</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/nelstrom/SyntaxHighlighter/tree/50f3a7e1f4f7d9e8103e5847323508beae529491/styles/shThemeBlackboard.css" hotkey="t">b3f0ada217473c53030f</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/nelstrom/SyntaxHighlighter/commit/67e6c02e8105ad130fb849b6c6be6e6d5cdfe9fc" hotkey="p">67e6c02e8105ad130fb8</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="scripts/shBrushVimscript.js/">
      <b><a href="/nelstrom/SyntaxHighlighter/tree/50f3a7e1f4f7d9e8103e5847323508beae529491">SyntaxHighlighter</a></b> / <a href="/nelstrom/SyntaxHighlighter/tree/50f3a7e1f4f7d9e8103e5847323508beae529491/scripts">scripts</a> / shBrushVimscript.js       <span style="display:none" id="clippy_3980">scripts/shBrushVimscript.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_3980&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_3980&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="scripts/shBrushVimscript.js/">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/nelstrom/SyntaxHighlighter/file-edit/__current_ref__/scripts/shBrushVimscript.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://d3nwyuy0nl342s.cloudfront.net/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>254 lines (239 sloc)</span>
                
                <span>15.443 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/nelstrom/SyntaxHighlighter/raw/master/scripts/shBrushVimscript.js" id="raw-url">raw</a></li>
                
                  <li><a href="/nelstrom/SyntaxHighlighter/blame/master/scripts/shBrushVimscript.js">blame</a></li>
                
                <li><a href="/nelstrom/SyntaxHighlighter/commits/master/scripts/shBrushVimscript.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * SyntaxHighlighter</span></div><div class='line' id='LC3'><span class="cm"> * http://alexgorbatchev.com/</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * SyntaxHighlighter is donationware. If you are using it, please donate.</span></div><div class='line' id='LC6'><span class="cm"> * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * @version</span></div><div class='line' id='LC9'><span class="cm"> * 2.1.364 (October 15 2009)</span></div><div class='line' id='LC10'><span class="cm"> * </span></div><div class='line' id='LC11'><span class="cm"> * @copyright</span></div><div class='line' id='LC12'><span class="cm"> * Copyright (C) 2004-2009 Alex Gorbatchev.</span></div><div class='line' id='LC13'><span class="cm"> *</span></div><div class='line' id='LC14'><span class="cm"> * @license</span></div><div class='line' id='LC15'><span class="cm"> * This file is part of SyntaxHighlighter.</span></div><div class='line' id='LC16'><span class="cm"> * </span></div><div class='line' id='LC17'><span class="cm"> * SyntaxHighlighter is free software: you can redistribute it and/or modify</span></div><div class='line' id='LC18'><span class="cm"> * it under the terms of the GNU Lesser General Public License as published by</span></div><div class='line' id='LC19'><span class="cm"> * the Free Software Foundation, either version 3 of the License, or</span></div><div class='line' id='LC20'><span class="cm"> * (at your option) any later version.</span></div><div class='line' id='LC21'><span class="cm"> * </span></div><div class='line' id='LC22'><span class="cm"> * SyntaxHighlighter is distributed in the hope that it will be useful,</span></div><div class='line' id='LC23'><span class="cm"> * but WITHOUT ANY WARRANTY; without even the implied warranty of</span></div><div class='line' id='LC24'><span class="cm"> * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></div><div class='line' id='LC25'><span class="cm"> * GNU General Public License for more details.</span></div><div class='line' id='LC26'><span class="cm"> * </span></div><div class='line' id='LC27'><span class="cm"> * You should have received a copy of the GNU General Public License</span></div><div class='line' id='LC28'><span class="cm"> * along with SyntaxHighlighter.  If not, see &lt;http://www.gnu.org/copyleft/lesser.html&gt;.</span></div><div class='line' id='LC29'><span class="cm"> */</span></div><div class='line' id='LC30'><span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">brushes</span><span class="p">.</span><span class="nx">Vimscript</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC31'><span class="p">{</span></div><div class='line' id='LC32'>	<span class="kd">var</span> <span class="nx">keywords</span> <span class="o">=</span>	<span class="s1">&#39;abc abclear argdo argu argument bel belowright &#39;</span> <span class="o">+</span></div><div class='line' id='LC33'>					<span class="s1">&#39;bN bNext breakd breakdel buffer caddb caddbuffer cb cbuffer &#39;</span> <span class="o">+</span></div><div class='line' id='LC34'>					<span class="s1">&#39;cex cexpr cg cgetfile checkt checktime cnew cnewer col &#39;</span> <span class="o">+</span></div><div class='line' id='LC35'>					<span class="s1">&#39;colder con continue cq cquit delc delcommand diffoff diffu &#39;</span> <span class="o">+</span></div><div class='line' id='LC36'>					<span class="s1">&#39;diffupdate dr drop echom echomsg em emenu endt endtry &#39;</span> <span class="o">+</span></div><div class='line' id='LC37'>					<span class="s1">&#39;exu exusage fin find foldc foldclose fu function ha &#39;</span> <span class="o">+</span></div><div class='line' id='LC38'>					<span class="s1">&#39;hardcopy helpt helptags if is isearch ju jumps kee &#39;</span> <span class="o">+</span></div><div class='line' id='LC39'>					<span class="s1">&#39;keepmarks lan language lc lcd lefta leftabove lgetb lgetbuffer &#39;</span> <span class="o">+</span></div><div class='line' id='LC40'>					<span class="s1">&#39;lgrepa lgrepadd lla llast lmapc lmapclear lnf lnfile loc &#39;</span> <span class="o">+</span></div><div class='line' id='LC41'>					<span class="s1">&#39;lockmarks lpf lpfile ltag mak make menut menutranslate &#39;</span> <span class="o">+</span></div><div class='line' id='LC42'>					<span class="s1">&#39;mkvie mkview mzf mzfile next nu number opt options &#39;</span> <span class="o">+</span></div><div class='line' id='LC43'>					<span class="s1">&#39;perld perldo pp ppop Print promptr promptrepl ptj ptjump &#39;</span> <span class="o">+</span></div><div class='line' id='LC44'>					<span class="s1">&#39;ptp ptprevious pw pwd quit redi redir reg registers &#39;</span> <span class="o">+</span></div><div class='line' id='LC45'>					<span class="s1">&#39;rew rewind rubyd rubydo sal sall sba sball sbn &#39;</span> <span class="o">+</span></div><div class='line' id='LC46'>					<span class="s1">&#39;sbnext sb sbuffer setf setfiletype sfir sfirst sim simalt &#39;</span> <span class="o">+</span></div><div class='line' id='LC47'>					<span class="s1">&#39;sm smap sn snext snor snoremap so source spellr &#39;</span> <span class="o">+</span></div><div class='line' id='LC48'>					<span class="s1">&#39;spellrepall spr sprevious star startinsert stopi stopinsert sunmenu tabe &#39;</span> <span class="o">+</span></div><div class='line' id='LC49'>					<span class="s1">&#39;tabedit tabm tabmove tabo tabonly ta tag tclf tclfile &#39;</span> <span class="o">+</span></div><div class='line' id='LC50'>					<span class="s1">&#39;tj tjump tn tnext tr trewind tu tunmenu undol &#39;</span> <span class="o">+</span></div><div class='line' id='LC51'>					<span class="s1">&#39;undolist verb verbose vim vimgrep vmapc vmapclear wh while &#39;</span> <span class="o">+</span></div><div class='line' id='LC52'>					<span class="s1">&#39;win winsize wq wv wviminfo xm xmap XMLent xnoremenu &#39;</span> <span class="o">+</span></div><div class='line' id='LC53'>					<span class="s1">&#39;abo aboveleft arge argedit as ascii bf bfirst bo &#39;</span> <span class="o">+</span></div><div class='line' id='LC54'>					<span class="s1">&#39;botright breakl breaklist buffers cad caddexpr cc cf cfile &#39;</span> <span class="o">+</span></div><div class='line' id='LC55'>					<span class="s1">&#39;change cla clast cn cnext colo colorscheme cope copen &#39;</span> <span class="o">+</span></div><div class='line' id='LC56'>					<span class="s1">&#39;cr crewind delete diffpatch dig digraphs ds dsearch echon &#39;</span> <span class="o">+</span></div><div class='line' id='LC57'>					<span class="s1">&#39;emenu endw endwhile file fini finish folddoc folddoclosed go &#39;</span> <span class="o">+</span></div><div class='line' id='LC58'>					<span class="s1">&#39;goto help hid hide ij ijump isp isplit laddb &#39;</span> <span class="o">+</span></div><div class='line' id='LC59'>					<span class="s1">&#39;laddbuffer la last lch lchdir lex lexpr lgete lgetexpr &#39;</span> <span class="o">+</span></div><div class='line' id='LC60'>					<span class="s1">&#39;lh lhelpgrep lli llist lnew lnewer lNf lNfile lockv &#39;</span> <span class="o">+</span></div><div class='line' id='LC61'>					<span class="s1">&#39;lockvar lp lprevious lv lvimgrep ma mark mk mkexrc &#39;</span> <span class="o">+</span></div><div class='line' id='LC62'>					<span class="s1">&#39;mkv mkvimrc mz mzscheme Next omapc omapclear pc pclose &#39;</span> <span class="o">+</span></div><div class='line' id='LC63'>					<span class="s1">&#39;po pop pre preserve profd profdel ps psearch ptl &#39;</span> <span class="o">+</span></div><div class='line' id='LC64'>					<span class="s1">&#39;ptlast ptr ptrewind pyf pyfile quita quitall red redo &#39;</span> <span class="o">+</span></div><div class='line' id='LC65'>					<span class="s1">&#39;res resize ri right rubyf rubyfile san sandbox sbf &#39;</span> <span class="o">+</span></div><div class='line' id='LC66'>					<span class="s1">&#39;sbfirst sbN sbNext scripte scriptencoding setg setglobal sh shell &#39;</span> <span class="o">+</span></div><div class='line' id='LC67'>					<span class="s1">&#39;sla slast smapc smapclear sN sNext snoreme spelld spelldump &#39;</span> <span class="o">+</span></div><div class='line' id='LC68'>					<span class="s1">&#39;spellu spellundo sre srewind startr startreplace sts stselect sus &#39;</span> <span class="o">+</span></div><div class='line' id='LC69'>					<span class="s1">&#39;suspend tab tabf tabfind tabnew tabp tabprevious tags te &#39;</span> <span class="o">+</span></div><div class='line' id='LC70'>					<span class="s1">&#39;tearoff tl tlast tN tNext try una unabbreviate unh &#39;</span> <span class="o">+</span></div><div class='line' id='LC71'>					<span class="s1">&#39;unhide ve version vimgrepa vimgrepadd vne vnew winc wincmd &#39;</span> <span class="o">+</span></div><div class='line' id='LC72'>					<span class="s1">&#39;wn wnext wqa wqall xmapc xmapclear XMLns xunme al &#39;</span> <span class="o">+</span></div><div class='line' id='LC73'>					<span class="s1">&#39;all argg argglobal bad badd bl blast bp bprevious &#39;</span> <span class="o">+</span></div><div class='line' id='LC74'>					<span class="s1">&#39;br brewind bun bunload caddf caddfile ccl cclose cfir &#39;</span> <span class="o">+</span></div><div class='line' id='LC75'>					<span class="s1">&#39;cfirst changes cl clist cN cNext comc comclear co &#39;</span> <span class="o">+</span></div><div class='line' id='LC76'>					<span class="s1">&#39;copy cuna cunabbrev delf delfunction diffpu diffput di display &#39;</span> <span class="o">+</span></div><div class='line' id='LC77'>					<span class="s1">&#39;dsp dsplit edit endfo endfor ene enew files fir &#39;</span> <span class="o">+</span></div><div class='line' id='LC78'>					<span class="s1">&#39;first foldd folddoopen gr grep helpf helpfind his history &#39;</span> <span class="o">+</span></div><div class='line' id='LC79'>					<span class="s1">&#39;il ilist iuna iunabbrev keepalt lad laddexpr later lcl &#39;</span> <span class="o">+</span></div><div class='line' id='LC80'>					<span class="s1">&#39;lclose lf lfile lg lgetfile list lmak lmake lne &#39;</span> <span class="o">+</span></div><div class='line' id='LC81'>					<span class="s1">&#39;lnext ln lnoremap lol lolder lr lrewind lvimgrepa lvimgrepadd &#39;</span> <span class="o">+</span></div><div class='line' id='LC82'>					<span class="s1">&#39;marks mks mksession mod mode nbkey nmapc nmapclear on &#39;</span> <span class="o">+</span></div><div class='line' id='LC83'>					<span class="s1">&#39;only ped pedit popu prev previous prof profile pta &#39;</span> <span class="o">+</span></div><div class='line' id='LC84'>					<span class="s1">&#39;ptag ptn ptnext pts ptselect py python read redr &#39;</span> <span class="o">+</span></div><div class='line' id='LC85'>					<span class="s1">&#39;redraw ret retab rightb rightbelow ru runtime sa sargument &#39;</span> <span class="o">+</span></div><div class='line' id='LC86'>					<span class="s1">&#39;sbl sblast sbp sbprevious scrip scriptnames setl setlocal sign &#39;</span> <span class="o">+</span></div><div class='line' id='LC87'>					<span class="s1">&#39;sl sleep sme sni sniff snoremenu spe spellgood spellw &#39;</span> <span class="o">+</span></div><div class='line' id='LC88'>					<span class="s1">&#39;spellwrong sta stag stj stjump sun sunhide sv sview &#39;</span> <span class="o">+</span></div><div class='line' id='LC89'>					<span class="s1">&#39;tabc tabclose tabfir tabfirst tabn tabnext tabr tabrewind tc &#39;</span> <span class="o">+</span></div><div class='line' id='LC90'>					<span class="s1">&#39;tcl tf tfirst tm to topleft ts tselect undo &#39;</span> <span class="o">+</span></div><div class='line' id='LC91'>					<span class="s1">&#39;unlo unlockvar vert vertical vi visual vs vsplit windo &#39;</span> <span class="o">+</span></div><div class='line' id='LC92'>					<span class="s1">&#39;wN wNext write xa xall xme xn xnoremap xunmenu &#39;</span> <span class="o">+</span></div><div class='line' id='LC93'>					<span class="s1">&#39;arga argadd argl arglocal ba ball bm bmodified brea &#39;</span> <span class="o">+</span></div><div class='line' id='LC94'>					<span class="s1">&#39;break bro browse bw bwipeout cal call cd cgetb &#39;</span> <span class="o">+</span></div><div class='line' id='LC95'>					<span class="s1">&#39;cgetbuffer chd chdir clo close cnf cnfile comp compiler &#39;</span> <span class="o">+</span></div><div class='line' id='LC96'>					<span class="s1">&#39;cpf cpfile cw cwindow delm delmarks diffsplit dj djump &#39;</span> <span class="o">+</span></div><div class='line' id='LC97'>					<span class="s1">&#39;earlier el else endf endfunction ex filetype fix fixdel &#39;</span> <span class="o">+</span></div><div class='line' id='LC98'>					<span class="s1">&#39;foldo foldopen grepa grepadd helpg helpgrep iabc iabclear imapc &#39;</span> <span class="o">+</span></div><div class='line' id='LC99'>					<span class="s1">&#39;imapclear join keepj keepjumps laddf laddfile lb lbuffer le &#39;</span> <span class="o">+</span></div><div class='line' id='LC100'>					<span class="s1">&#39;left lfir lfirst lgr lgrep ll lm lmap lN &#39;</span> <span class="o">+</span></div><div class='line' id='LC101'>					<span class="s1">&#39;lNext lo loadview lop lopen ls lw lwindow mat &#39;</span> <span class="o">+</span></div><div class='line' id='LC102'>					<span class="s1">&#39;match maca macaction macm macmenu mksp mkspell move new &#39;</span> <span class="o">+</span></div><div class='line' id='LC103'>					<span class="s1">&#39;noh nohlsearch open pe perl popu popup print promptf &#39;</span> <span class="o">+</span></div><div class='line' id='LC104'>					<span class="s1">&#39;promptfind ptf ptfirst ptN ptNext pu put qa qall &#39;</span> <span class="o">+</span></div><div class='line' id='LC105'>					<span class="s1">&#39;rec recover redraws redrawstatus retu return rub ruby rv &#39;</span> <span class="o">+</span></div><div class='line' id='LC106'>					<span class="s1">&#39;rviminfo sav saveas sbm sbmodified sbr sbrewind se set &#39;</span> <span class="o">+</span></div><div class='line' id='LC107'>					<span class="s1">&#39;sf sfind sil silent sm smagic smenu sno snomagic &#39;</span> <span class="o">+</span></div><div class='line' id='LC108'>					<span class="s1">&#39;sor sort spelli spellinfo sp split startg startgreplace st &#39;</span> <span class="o">+</span></div><div class='line' id='LC109'>					<span class="s1">&#39;stop sunme syncbind tabd tabdo tabl tablast tabN tabNext &#39;</span> <span class="o">+</span></div><div class='line' id='LC110'>					<span class="s1">&#39;tabs tcld tcldo th throw tm tmenu tp tprevious &#39;</span> <span class="o">+</span></div><div class='line' id='LC111'>					<span class="s1">&#39;tu undoj undojoin up update vie view viu viusage &#39;</span> <span class="o">+</span></div><div class='line' id='LC112'>					<span class="s1">&#39;wa wall winp winpos wp wprevious ws wsverb xit &#39;</span> <span class="o">+</span></div><div class='line' id='LC113'>					<span class="s1">&#39;xmenu xnoreme yank argd argdelete ar args bd bdelete &#39;</span> <span class="o">+</span></div><div class='line' id='LC114'>					<span class="s1">&#39;bn bnext breaka breakadd bufdo cabc cabclear cat catch &#39;</span> <span class="o">+</span></div><div class='line' id='LC115'>					<span class="s1">&#39;ce center cgete cgetexpr che checkpath cmapc cmapclear cNf &#39;</span> <span class="o">+</span></div><div class='line' id='LC116'>					<span class="s1">&#39;cNfile conf confirm cp cprevious debugg debuggreedy diffg diffget &#39;</span> <span class="o">+</span></div><div class='line' id='LC117'>					<span class="s1">&#39;diffthis dl dlist echoe echoerr elsei elseif en endif &#39;</span> <span class="o">+</span></div><div class='line' id='LC118'>					<span class="s1">&#39;exi exit fina finally fo fold for &#39;</span> <span class="o">+</span></div><div class='line' id='LC119'>					<span class="s1">&#39;echohl&#39;</span><span class="p">;</span></div><div class='line' id='LC120'>					<span class="c1">// additional miscelanious keywords, </span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>	<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="s1">&#39;acd ambiwidth arabicshape autowriteall backupdir bdlay binary &#39;</span> <span class="o">+</span></div><div class='line' id='LC123'>					<span class="s1">&#39;breakat bufhidden cdpath cin cinwords columns completeopt cpo cscopetagorder &#39;</span> <span class="o">+</span></div><div class='line' id='LC124'>					<span class="s1">&#39;csverb deco dictionary directory ed encoding errorfile exrc fdls &#39;</span> <span class="o">+</span></div><div class='line' id='LC125'>					<span class="s1">&#39;fencs fileformats fmr foldlevel foldtext fsync gfs gtl guioptions &#39;</span> <span class="o">+</span></div><div class='line' id='LC126'>					<span class="s1">&#39;hf hk hlsearch imak ims indentexpr is isp keywordprg &#39;</span> <span class="o">+</span></div><div class='line' id='LC127'>					<span class="s1">&#39;lazyredraw lispwords ls makeef maxmapdepth mfd mmd modified mousemodel &#39;</span> <span class="o">+</span></div><div class='line' id='LC128'>					<span class="s1">&#39;msm numberwidth operatorfunc pastetoggle pexpr pmbfn printexpr pt readonly &#39;</span> <span class="o">+</span></div><div class='line' id='LC129'>					<span class="s1">&#39;rightleft rtp sb scroll sect sessionoptions shellpipe shellxquote showbreak &#39;</span> <span class="o">+</span></div><div class='line' id='LC130'>					<span class="s1">&#39;shq slm smd spc spf sr sta sts swapfile &#39;</span> <span class="o">+</span></div><div class='line' id='LC131'>					<span class="s1">&#39;sxq tabpagemax tags tbis terse thesaurus titleold toolbariconsize tsr &#39;</span> <span class="o">+</span></div><div class='line' id='LC132'>					<span class="s1">&#39;ttyfast tx ut verbosefile virtualedit wb wfw wildcharm winaltkeys &#39;</span> <span class="o">+</span></div><div class='line' id='LC133'>					<span class="s1">&#39;winminwidth wmnu write ai ambw ari aw backupext beval &#39;</span> <span class="o">+</span></div><div class='line' id='LC134'>					<span class="s1">&#39;biosk brk buflisted cedit cindent clipboard com confirm cpoptions &#39;</span> <span class="o">+</span></div><div class='line' id='LC135'>					<span class="s1">&#39;cscopeverbose cuc def diff display edcompatible endofline errorformat fcl &#39;</span> <span class="o">+</span></div><div class='line' id='LC136'>					<span class="s1">&#39;fdm fex filetype fo foldlevelstart formatexpr ft gfw gtt &#39;</span> <span class="o">+</span></div><div class='line' id='LC137'>					<span class="s1">&#39;guipty hh hkmap ic imc imsearch indentkeys isf isprint &#39;</span> <span class="o">+</span></div><div class='line' id='LC138'>					<span class="s1">&#39;km lbr list lsp makeprg maxmem mh mmp more &#39;</span> <span class="o">+</span></div><div class='line' id='LC139'>					<span class="s1">&#39;mouses mzq nuw opfunc patchexpr pfn popt printfont pumheight &#39;</span> <span class="o">+</span></div><div class='line' id='LC140'>					<span class="s1">&#39;redrawtime rightleftcmd ru sbo scrollbind sections sft shellquote shiftround &#39;</span> <span class="o">+</span></div><div class='line' id='LC141'>					<span class="s1">&#39;showcmd si sm sn spell spl srr stal su &#39;</span> <span class="o">+</span></div><div class='line' id='LC142'>					<span class="s1">&#39;swapsync syn tabstop tagstack tbs textauto tildeop titlestring top &#39;</span> <span class="o">+</span></div><div class='line' id='LC143'>					<span class="s1">&#39;ttimeout ttym uc vb vfile visualbell wc wh wildignore &#39;</span> <span class="o">+</span></div><div class='line' id='LC144'>					<span class="s1">&#39;window winwidth wmw writeany akm anti arshape awa backupskip &#39;</span> <span class="o">+</span></div><div class='line' id='LC145'>					<span class="s1">&#39;bex bioskey browsedir buftype cf cink cmdheight comments consk &#39;</span> <span class="o">+</span></div><div class='line' id='LC146'>					<span class="s1">&#39;cpt cspc cul define diffexpr dy ef eol esckeys &#39;</span> <span class="o">+</span></div><div class='line' id='LC147'>					<span class="s1">&#39;fcs fdn ff fillchars foldclose foldmarker formatlistpat gcr ghr &#39;</span> <span class="o">+</span></div><div class='line' id='LC148'>					<span class="s1">&#39;guicursor guitablabel hi hkmapp icon imcmdline inc indk isfname &#39;</span> <span class="o">+</span></div><div class='line' id='LC149'>					<span class="s1">&#39;joinspaces kmp lcs listchars lw mat maxmempattern mis mmt &#39;</span> <span class="o">+</span></div><div class='line' id='LC150'>					<span class="s1">&#39;mouse mouseshape mzquantum odev osfiletype patchmode ph preserveindent printheader &#39;</span> <span class="o">+</span></div><div class='line' id='LC151'>					<span class="s1">&#39;pvh remap rl ruf sbr scrolljump secure sh shellredir &#39;</span> <span class="o">+</span></div><div class='line' id='LC152'>					<span class="s1">&#39;shiftwidth showfulltag sidescroll smartcase so spellcapcheck splitbelow ss startofline &#39;</span> <span class="o">+</span></div><div class='line' id='LC153'>					<span class="s1">&#39;sua swb synmaxcol tag tal tenc textmode timeout tl &#39;</span> <span class="o">+</span></div><div class='line' id='LC154'>					<span class="s1">&#39;tpm ttimeoutlen ttymouse ul vbs vi vop wcm whichwrap &#39;</span> <span class="o">+</span></div><div class='line' id='LC155'>					<span class="s1">&#39;wildmenu winfixheight wiv wop writebackup al antialias autochdir background &#39;</span> <span class="o">+</span></div><div class='line' id='LC156'>					<span class="s1">&#39;balloondelay bexpr bk bs casemap cfu cinkeys cmdwinheight commentstring &#39;</span> <span class="o">+</span></div><div class='line' id='LC157'>					<span class="s1">&#39;conskey cscopepathcomp csprg cursorcolumn delcombine diffopt ea efm ep &#39;</span> <span class="o">+</span></div><div class='line' id='LC158'>					<span class="s1">&#39;et fdc fdo ffs fk foldcolumn foldmethod formatoptions gd &#39;</span> <span class="o">+</span></div><div class='line' id='LC159'>					<span class="s1">&#39;go guifont guitabtooltip hid hkp iconstring imd include inex &#39;</span> <span class="o">+</span></div><div class='line' id='LC160'>					<span class="s1">&#39;isi js kp linebreak lm lz matchpairs maxmemtot mkspellmem &#39;</span> <span class="o">+</span></div><div class='line' id='LC161'>					<span class="s1">&#39;mod mousef mouset nf oft pa path pheader previewheight &#39;</span> <span class="o">+</span></div><div class='line' id='LC162'>					<span class="s1">&#39;printmbcharset pvw report rlc ruler sc scrolloff sel shcf &#39;</span> <span class="o">+</span></div><div class='line' id='LC163'>					<span class="s1">&#39;shellslash shm showmatch sidescrolloff smartindent softtabstop spellfile splitright ssl &#39;</span> <span class="o">+</span></div><div class='line' id='LC164'>					<span class="s1">&#39;statusline suffixes swf syntax tagbsearch tb term textwidth timeoutlen &#39;</span> <span class="o">+</span></div><div class='line' id='LC165'>					<span class="s1">&#39;tm tr ttm ttyscroll undolevels vdir viewdir wa wd &#39;</span> <span class="o">+</span></div><div class='line' id='LC166'>					<span class="s1">&#39;wi wildmode winfixwidth wiw wrap writedelay aleph ar autoindent &#39;</span> <span class="o">+</span></div><div class='line' id='LC167'>					<span class="s1">&#39;backspace ballooneval bg bkc bsdir cb ch cino cmp &#39;</span> <span class="o">+</span></div><div class='line' id='LC168'>					<span class="s1">&#39;compatible copyindent cscopeprg csqf cursorline dex digraph ead ei &#39;</span> <span class="o">+</span></div><div class='line' id='LC169'>					<span class="s1">&#39;equalalways eventignore fde fdt fileencoding fkmap foldenable foldminlines formatprg &#39;</span> <span class="o">+</span></div><div class='line' id='LC170'>					<span class="s1">&#39;gdefault gp guifontset helpfile hidden hl ignorecase imdisable includeexpr &#39;</span> <span class="o">+</span></div><div class='line' id='LC171'>					<span class="s1">&#39;inf isident key langmap lines lmap ma matchtime mco &#39;</span> <span class="o">+</span></div><div class='line' id='LC172'>					<span class="s1">&#39;ml modeline mousefocus mousetime nrformats ofu para pdev pi &#39;</span> <span class="o">+</span></div><div class='line' id='LC173'>					<span class="s1">&#39;previewwindow printmbfont qe restorescreen ro rulerformat scb scrollopt selection &#39;</span> <span class="o">+</span></div><div class='line' id='LC174'>					<span class="s1">&#39;shell shelltemp shortmess showmode siso smarttab sol spelllang spr &#39;</span> <span class="o">+</span></div><div class='line' id='LC175'>					<span class="s1">&#39;ssop stl suffixesadd switchbuf ta taglength tbi termbidi tf &#39;</span> <span class="o">+</span></div><div class='line' id='LC176'>					<span class="s1">&#39;title to ts tty ttytype updatecount ve viewoptions wak &#39;</span> <span class="o">+</span></div><div class='line' id='LC177'>					<span class="s1">&#39;weirdinvert wig wildoptions winheight wm wrapmargin ws allowrevins arab &#39;</span> <span class="o">+</span></div><div class='line' id='LC178'>					<span class="s1">&#39;autoread backup balloonexpr bh bl bsk ccv charconvert cinoptions &#39;</span> <span class="o">+</span></div><div class='line' id='LC179'>					<span class="s1">&#39;cms complete cot cscopequickfix cst cwh dg dip eadirection &#39;</span> <span class="o">+</span></div><div class='line' id='LC180'>					<span class="s1">&#39;ek equalprg ex fdi fen fileencodings flp foldexpr foldnestmax &#39;</span> <span class="o">+</span></div><div class='line' id='LC181'>					<span class="s1">&#39;fp gfm grepformat guifontwide helpheight highlight hlg im imi &#39;</span> <span class="o">+</span></div><div class='line' id='LC182'>					<span class="s1">&#39;incsearch infercase isk keymap langmenu linespace loadplugins macatsui maxcombine &#39;</span> <span class="o">+</span></div><div class='line' id='LC183'>					<span class="s1">&#39;mef mls modelines mousehide mp nu omnifunc paragraphs penc &#39;</span> <span class="o">+</span></div><div class='line' id='LC184'>					<span class="s1">&#39;pm printdevice printoptions quoteescape revins rs runtimepath scr scs &#39;</span> <span class="o">+</span></div><div class='line' id='LC185'>					<span class="s1">&#39;selectmode shellcmdflag shelltype shortname showtabline sj smc sp spellsuggest &#39;</span> <span class="o">+</span></div><div class='line' id='LC186'>					<span class="s1">&#39;sps st stmp sw sws tabline tagrelative tbidi termencoding &#39;</span> <span class="o">+</span></div><div class='line' id='LC187'>					<span class="s1">&#39;tgst titlelen toolbar tsl ttybuiltin tw updatetime verbose viminfo &#39;</span> <span class="o">+</span></div><div class='line' id='LC188'>					<span class="s1">&#39;warn wfh wildchar wim winminheight wmh wrapscan ww altkeymap &#39;</span> <span class="o">+</span></div><div class='line' id='LC189'>					<span class="s1">&#39;arabic autowrite backupcopy bdir bin bomb bt cd ci &#39;</span> <span class="o">+</span></div><div class='line' id='LC190'>					<span class="s1">&#39;cinw co completefunc cp cscopetag csto debug dict dir &#39;</span> <span class="o">+</span></div><div class='line' id='LC191'>					<span class="s1">&#39;eb enc errorbells expandtab noexpandtab fdl fenc fileformat fml foldignore &#39;</span> <span class="o">+</span></div><div class='line' id='LC192'>					<span class="s1">&#39;foldopen fs gfn grepprg guiheadroom helplang history hls imactivatekey &#39;</span> <span class="o">+</span></div><div class='line' id='LC193'>					<span class="s1">&#39;iminsert inde insertmode iskeyword keymodel laststatus lisp lpl magic &#39;</span> <span class="o">+</span></div><div class='line' id='LC194'>					<span class="s1">&#39;maxfuncdepth menuitems mm modifiable mousem mps number opendevice paste &#39;</span> <span class="o">+</span></div><div class='line' id='LC195'>					<span class="s1">&#39;pex pmbcs printencoding prompt rdt ri&#39;</span><span class="p">;</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>	<span class="kd">var</span> <span class="nx">vimUserAttrbCmplt</span> <span class="o">=</span>	<span class="s1">&#39;augroup buffer command dir environment event expression &#39;</span> <span class="o">+</span></div><div class='line' id='LC199'>					<span class="s1">&#39;file function help highlight mapping menu option something tag &#39;</span> <span class="o">+</span></div><div class='line' id='LC200'>					<span class="s1">&#39;tag_listfiles var&#39;</span><span class="p">;</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>	<span class="kd">var</span> <span class="nx">vimLet</span> <span class="o">=</span>	<span class="s1">&#39;let unl unlet &#39;</span><span class="p">;</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>	<span class="kd">var</span> <span class="nx">vimAutoCmd</span> <span class="o">=</span>	<span class="s1">&#39;au autocmd do doautocmd doautoa doautoall&#39;</span><span class="p">;</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>	<span class="kd">var</span> <span class="nx">vimMap</span> <span class="o">=</span>	<span class="s1">&#39;map cm cmap cno cnoremap im imap ino &#39;</span> <span class="o">+</span></div><div class='line' id='LC207'>					<span class="s1">&#39;inoremap ln lnoremap nm nmap nn nnoremap no noremap &#39;</span> <span class="o">+</span></div><div class='line' id='LC208'>					<span class="s1">&#39;om omap ono onoremap snor snoremap vm vmap vn vnoremap xn xnoremap&#39;</span><span class="p">;</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>	<span class="kd">var</span> <span class="nx">builtins</span> <span class="o">=</span>	<span class="s1">&#39;BufRead ModeMsg None BufAdd BufCreate BufDelete &#39;</span> <span class="o">+</span></div><div class='line' id='LC211'>					<span class="s1">&#39;BufEnter BufFilePost BufFilePre BufHidden BufLeave BufNew &#39;</span> <span class="o">+</span></div><div class='line' id='LC212'>					<span class="s1">&#39;BufNewFile BufRead BufReadCmd BufReadPost BufReadPre &#39;</span> <span class="o">+</span></div><div class='line' id='LC213'>					<span class="s1">&#39;BufUnload BufWinEnter BufWinLeave BufWipeout BufWrite &#39;</span> <span class="o">+</span></div><div class='line' id='LC214'>					<span class="s1">&#39;BufWriteCmd BufWritePost BufWritePre Cmd-event CmdwinEnter &#39;</span> <span class="o">+</span></div><div class='line' id='LC215'>					<span class="s1">&#39;CmdwinLeave ColorScheme CursorHold CursorHoldI CursorMoved &#39;</span> <span class="o">+</span></div><div class='line' id='LC216'>					<span class="s1">&#39;CursorMovedI EncodingChanged FileAppendCmd FileAppendPost &#39;</span> <span class="o">+</span></div><div class='line' id='LC217'>					<span class="s1">&#39;FileAppendPre FileChangedRO FileChangedShell FileChangedShellPost &#39;</span> <span class="o">+</span></div><div class='line' id='LC218'>					<span class="s1">&#39;FileEncoding FileReadCmd FileReadPost FileReadPre FileType &#39;</span> <span class="o">+</span></div><div class='line' id='LC219'>					<span class="s1">&#39;FileWriteCmd FileWritePost FileWritePre FilterReadPost &#39;</span> <span class="o">+</span></div><div class='line' id='LC220'>					<span class="s1">&#39;FilterReadPre FilterWritePost FilterWritePre FocusGained &#39;</span> <span class="o">+</span></div><div class='line' id='LC221'>					<span class="s1">&#39;FocusLost FuncUndefined GUIEnter GUIFailed InsertChange &#39;</span> <span class="o">+</span></div><div class='line' id='LC222'>					<span class="s1">&#39;InsertEnter InsertLeave MenuPopup QuickFixCmdPost QuickFixCmdPre &#39;</span> <span class="o">+</span></div><div class='line' id='LC223'>					<span class="s1">&#39;RemoteReply SessionLoadPost ShellCmdPost ShellFilterPost SourceCmd &#39;</span> <span class="o">+</span></div><div class='line' id='LC224'>					<span class="s1">&#39;SourcePre SpellFileMissing StdinReadPost StdinReadPre SwapExists &#39;</span> <span class="o">+</span></div><div class='line' id='LC225'>					<span class="s1">&#39;Syntax TabEnter TabLeave TermChanged TermResponse User &#39;</span> <span class="o">+</span></div><div class='line' id='LC226'>					<span class="s1">&#39;UserGettingBored VimEnter VimLeave VimLeavePre VimResized WinEnter WinLeave &#39;</span><span class="p">;</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>	<span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">singleLineVimscriptComments</span> <span class="o">=</span> <span class="sr">/^\s*&quot;.*$/gm</span></div><div class='line' id='LC232'>	<span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">keyMappings</span> <span class="o">=</span> <span class="sr">/(\&lt;|&amp;lt;)\w[-\w\[\]]+(\&gt;|&amp;gt;)/ig</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>	<span class="k">this</span><span class="p">.</span><span class="nx">regexList</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC235'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">singleLineVimscriptComments</span><span class="p">,</span>	<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;comments&#39;</span> <span class="p">},</span>		<span class="c1">// one line comments</span></div><div class='line' id='LC236'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">keyMappings</span><span class="p">,</span>	<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;color3&#39;</span> <span class="p">},</span>		<span class="c1">// Vimscript key mappings (e.g. &lt;CR&gt; &lt;C-S-[&gt;)</span></div><div class='line' id='LC237'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">doubleQuotedString</span><span class="p">,</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;string&#39;</span> <span class="p">},</span>			<span class="c1">// double quoted strings</span></div><div class='line' id='LC238'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">singleQuotedString</span><span class="p">,</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;string&#39;</span> <span class="p">},</span>			<span class="c1">// single quoted strings</span></div><div class='line' id='LC239'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="sr">/\s*#.*/gm</span><span class="p">,</span>										<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;preprocessor&#39;</span> <span class="p">},</span>		<span class="c1">// preprocessor tags like #region and #endregion</span></div><div class='line' id='LC240'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">options</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">},</span>			<span class="c1">// options</span></div><div class='line' id='LC241'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">vimMap</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">},</span>			<span class="c1">// options</span></div><div class='line' id='LC242'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">vimUserAttrbCmplt</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">},</span>			<span class="c1">// options</span></div><div class='line' id='LC243'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">vimAutoCmd</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">},</span>			<span class="c1">// options</span></div><div class='line' id='LC244'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">keywords</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">},</span>			<span class="c1">// keywords</span></div><div class='line' id='LC245'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">vimLet</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">},</span>			<span class="c1">// keywords</span></div><div class='line' id='LC246'>		<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">builtins</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;color1&#39;</span> <span class="p">}</span>			<span class="c1">// keywords</span></div><div class='line' id='LC247'>		<span class="p">];</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>	<span class="k">this</span><span class="p">.</span><span class="nx">forHtmlScript</span><span class="p">(</span><span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">scriptScriptTags</span><span class="p">);</span></div><div class='line' id='LC250'><span class="p">};</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'><span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">brushes</span><span class="p">.</span><span class="nx">Vimscript</span><span class="p">.</span><span class="nx">prototype</span>	<span class="o">=</span> <span class="k">new</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">Highlighter</span><span class="p">();</span></div><div class='line' id='LC253'><span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">brushes</span><span class="p">.</span><span class="nx">Vimscript</span><span class="p">.</span><span class="nx">aliases</span>	<span class="o">=</span> <span class="p">[</span><span class="s1">&#39;vim&#39;</span><span class="p">,</span> <span class="s1">&#39;vimscript&#39;</span><span class="p">];</span></div><div class='line' id='LC254'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        <div class="sponsor">
          <a href="http://www.rackspace.com" class="logo">
            <img alt="Dedicated Server" height="36" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/footer/rackspace_logo.png?v2" width="38" />
          </a>
          Powered by the <a href="http://www.rackspace.com ">Dedicated
          Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
          Computing</a> of Rackspace Hosting<span>&reg;</span>
        </div>

        <ul class="links">
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
          <li><a href="/login/multipass?to=http%3A%2F%2Fsupport.github.com">Support</a></li>
          <li><a href="https://github.com/training">Training</a></li>
          <li><a href="http://jobs.github.com">Job Board</a></li>
          <li><a href="http://shop.github.com">Shop</a></li>
          <li><a href="https://github.com/contact">Contact</a></li>
          <li><a href="http://develop.github.com">API</a></li>
          <li><a href="http://status.github.com">Status</a></li>
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.06764s from fe4.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    
      
      
        <!-- current locale:  -->
        <div class="locales instapaper_ignore readability-footer">
          <div class="site">

            <ul class="choices clearfix limited-locales">
              <li><span class="current">English</span></li>
              
                  <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
              
                  <li><a rel="nofollow" href="?locale=fr">Français</a></li>
              
                  <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
              
                  <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
              
                  <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
              
                  <li><a rel="nofollow" href="?locale=zh">中文</a></li>
              
              <li class="all"><a href="#" class="minibutton btn-forward js-all-locales"><span><span class="icon"></span>See all available languages</span></a></li>
            </ul>

            <div class="all-locales clearfix">
              <h3>Your current locale selection: <strong>English</strong>. Choose another?</h3>
              
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=en">English</a></li>
                  
                      <li><a rel="nofollow" href="?locale=af">Afrikaans</a></li>
                  
                      <li><a rel="nofollow" href="?locale=be">Беларуская</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                      <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                      <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                      <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hu">Magyar</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                      <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                      <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                      <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                </ul>
              
            </div>

          </div>
          <div class="fade"></div>
        </div>
      
    

    <script>window._auth_token = "20cc176b5b0af3c7c30722af0ef185d251aa2457"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>

    <h3>Source Code Browsing</h3>
    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
      </div>
    </div>
  </div>

</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    <script type='text/javascript'></script>
    
  </body>
</html>

