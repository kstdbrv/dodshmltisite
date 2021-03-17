<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/default/themes/custom/start_theme/templates/page.html.twig */
class __TwigTemplate_e423f3f64663d8fc5ec302d5a1bd11c800993c3997cb2df2bd3df97e478426c7 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<header class=\"header\">
  <div class=\"header__top\">
   ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top", [], "any", false, false, true, 3), 3, $this->source), "html", null, true);
        echo "
  </div>
  <div class=\"container\">
    <div class=\"header__center center-header\">
     <div class=\"center-header__left\">
       ";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_left", [], "any", false, false, true, 8), 8, $this->source), "html", null, true);
        echo "
      </div>
      <div class=\"center-header__logo\">
       ";
        // line 11
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center", [], "any", false, false, true, 11), 11, $this->source), "html", null, true);
        echo "
      </div>
     <div class=\"center-header__right\">
       ";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_right", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
        echo "
     </div>
    </div>
  </div> 
  <div class=\"header__underline\"></div>

  <div class=\"container\">
    <div class=\"header__bottom bottom-header\">
     <div class=\"bottom-header__logos\">
      ";
        // line 23
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header__logos", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
        echo "
     </div>
     <div class=\"bottom-header__menu\">
       ";
        // line 26
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "menu", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
        echo "
       
      <div class=\"bottom-header__burger\">
        <p class=\"icon-menu\">МЕНЮ</p>
        <div class=\"icon-menu\">
          <span></span>
          <span></span> ";
        // line 33
        echo "          <span></span>
        </div>
      </div>

      
     </div>
     <div class=\"bottom-header__icons\">
     
       <a href=\"#\" title=\"Версия для слабовидящих\">
        <svg class=\"art\"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -.7 42 42\"><path fill-rule=\"evenodd\" d=\"M42 8.5V32c-.8 4.6-4.1 8.8-9.8 8.4-4.6-.3-7.6-3.3-8.5-7.2-.1-.5-.2-1.2-.5-1.7-.8-1.5-3.6-1.4-4.3 0-.4.7-.2 1.5-.5 2.4-.3 1.1-1.1 3-2 2.6-.8-.3.1-1.4.3-2 2.9-6.1-2.6-12.9-9.2-11.3C4.2 24 1 27 1.3 31.6c.3 5.3 6.2 9.7 11.8 6.7.5-.3.9-.5 1.3-.8.3-.2.7-.9 1.4-.4.3 1.1-1.5 2.1-2.5 2.5C7 42.6.4 37.7 0 32V8.5C.2 6.4.8 5 1.7 3.4 2.4 2.2 3.5.1 5.2 0c1.3-.1 2.2 1 2.1 2.2-.1.7-.6 1-1.1 1.6-.5.5-.8 1.1-1.1 1.6-2.4 4.3-.7 12-1.2 18.1 1.4-.8 3.3-1.7 5.5-1.7 4.3 0 7.1 2.8 8.6 5.6 1.5-1 4.7-.9 6.2 0 .4-.7.6-1.3 1.1-1.9.5-.7 2-2.5 2.7-1.6.6.7-.3 1-.7 1.4-.5.4-.9 1-1.1 1.3-3.7 5.3.2 12.4 6.2 12.7 5 .3 7.9-3.3 8.4-6.9.7-4.7-2.3-8.1-6.2-9.1-1-.2-2.4-.3-3.5-.1-.7.1-2.3 1.1-2.4 0-.1-.6 1-.9 1.6-1.1 2.1-.5 4.4-.3 6.1.4.7.3 1.4 1 1.8.9-.4-5.9 1-14-1.2-18-.5-.9-2.1-2.2-2.1-3.3C34.8.9 35.7-.1 37 0c1.5.1 2.7 2.1 3.4 3.3.9 1.7 1.4 3.5 1.6 5.2zm-39.4 16c.2-.8 0-2 0-3.2v-9.8c0-3.5.6-5.7 2.1-7.7.3-.4 1.4-1.4 1.3-2-.1-.5-.8-.7-1.1-.4C3 3 1.4 5.7 1.2 8.9c-.3 5.7.2 11.9 0 17.5.4-.6 1.2-1.1 1.4-1.9zM39.5 4.4c-.5-1-1.6-2.9-2.8-3.1-.5-.2-.7.6-.7.6-.1.7 1 1.4 1.3 1.9 1.5 2.1 2.1 4.1 2.1 7.8v9.8c0 1.2-.2 2.5 0 3.3.1.3.5.7.7 1 .2.3.5.9.7.7-.6-6.9 1.3-17.1-1.3-22zM18.3 28.7c.2.3.2.7.2 1.2 1.2-.9 3.7-.9 4.9 0 0-.5.1-.9.2-1.3-1.1-.9-4.2-1-5.3.1z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8.5 24.7c4-.5 7.1 2.4 7.4 6 .4 5.5-5.5 8.8-9.9 6.2-2.2-1.3-4.4-5-2.6-8.6.6-1.4 2.4-3.3 5.1-3.6zM4 30.3c-.7 4.8 4 7.3 7.4 5.9 2-.8 3.5-2.9 3.3-5.5-.2-2.9-2.8-5.2-6-4.8-2.3.3-4.3 1.9-4.7 4.4zM31.9 24.7c3.8-.4 6.9 2.3 7.3 5.6.5 4.7-3.2 7.9-7.4 7.5-4-.4-7.2-5-5.2-9.4.8-1.7 2.8-3.4 5.3-3.7zm-4.6 6.1c-.2 2.4 1.3 4.5 3.1 5.3 3.6 1.6 6.7-.8 7.4-3.4 1.1-4.1-2.2-7.2-5.8-6.7-2.5.2-4.5 2-4.7 4.8z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M7.1 30.8c0-.6.9-1.8 1.4-1.8 1.9-.2-.4 3.1-1.4 1.8zM31.8 29c.2 0 .6-.1.7.3.3.9-2 2.6-2.2 1.3 0-.5 1.2-1.5 1.5-1.6zM10.8 29.5c1.9.4-.1 1.8-.7 2.4-.3.3-2 2.4-2.3 1.1-.2-1 2.8-2.9 3-3.5zM34.2 29.6c.3-.1.7 0 .7.4.2.7-1.1 1.6-1.5 2-.3.3-2.1 2.4-2.4.9-.1-.5 1-1.4 1.3-1.7.7-.7 1.3-1.5 1.9-1.6z\" clip-rule=\"evenodd\"/></svg>
        </svg>
        ";
        // line 45
        echo "        ";
        // line 46
        echo "       </a>

       <a href=\"/search\" title=\"Поиск\">
        ";
        // line 50
        echo "        <img class=\"icon-impaired\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/search.svg\" alt=\"поиск\">
      </a>
        

      ";
        // line 54
        if ((($context["logged_in"] ?? null) == false)) {
            // line 55
            echo "       <!-- Modal Trigger -->
        <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
        <img class=\"icon-impaired\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/input.svg\" alt=\"вход на сайт\">
        </a>
      ";
        }
        // line 60
        echo "
      ";
        // line 61
        if (($context["logged_in"] ?? null)) {
            // line 62
            echo "        <a class=\"link unregister\" title=\"вход на сайт\" href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("user.logout"));
            echo "\">

         ";
            // line 65
            echo "        </a>
      ";
        }
        // line 67
        echo "
     </div>
    </div>
  </div> 

</header>






<main class=\"main\">
 <div class=\"container\">
  ";
        // line 81
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
        echo "
 </div>
</main>

<footer class=\"footer\">
 <div class=\"container\">
  ";
        // line 87
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 87), 87, $this->source), "html", null, true);
        echo "
 </div>
</footer>


  <!-- modal_login Structure -->
<div id=\"modal_login\" class=\"modal\">
  <div class=\"modal-content\">
      <form class=\"user-login-form antibot\" data-drupal-selector=\"user-login-form\" data-action=\"/user/login\" action=\"/user/login\" method=\"post\" id=\"user-login-form\" accept-charset=\"UTF-8\">
        <noscript>
          <div class=\"antibot-no-js antibot-message antibot-message-warning\">Вы должны включить JavaScript чтобы использовать эту форму.</div>
        </noscript>
        
        <label>Имя пользователя</label>
        <input autocorrect=\"none\" autocapitalize=\"none\" spellcheck=\"false\" autofocus=\"autofocus\" data-drupal-selector=\"edit-name\" aria-describedby=\"edit-name--description\" type=\"text\" id=\"edit-name\" name=\"name\" value=\"\" size=\"60\" maxlength=\"60\" class=\"form-text required\" required=\"required\" aria-required=\"true\">

        <label for=\"edit-pass\" class=\"js-form-required form-required active\">Пароль</label>
        <input data-drupal-selector=\"edit-pass\" aria-describedby=\"edit-pass--description\" type=\"password\" id=\"edit-pass\" name=\"pass\" size=\"60\" maxlength=\"128\" class=\"form-text required\" required=\"required\" aria-required=\"true\">

        <input data-drupal-selector=\"edit-user-login-form\" type=\"hidden\" name=\"form_id\" value=\"user_login_form\">
        
        <input data-drupal-selector=\"edit-antibot-key\" type=\"hidden\" name=\"antibot_key\" value=\"bUcEpvn70wYuyn-OQ8_zbOdLXsI15V0oE8hkQKaU4z8\">

  <div class=\"modal-footer\">
    <button type=\"submit\" class=\"waves-effect waves-light btn modal-trigger\">
       войти<i class=\"material-icons right\">login</i>
    </button>
   </div>
  </form>
 </div>
</div>






";
        // line 127
        echo "








";
    }

    public function getTemplateName()
    {
        return "sites/default/themes/custom/start_theme/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  205 => 127,  165 => 87,  156 => 81,  140 => 67,  136 => 65,  130 => 62,  128 => 61,  125 => 60,  118 => 55,  116 => 54,  110 => 50,  105 => 46,  103 => 45,  90 => 33,  81 => 26,  75 => 23,  63 => 14,  57 => 11,  51 => 8,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<header class=\"header\">
  <div class=\"header__top\">
   {{ page.header_top }}
  </div>
  <div class=\"container\">
    <div class=\"header__center center-header\">
     <div class=\"center-header__left\">
       {{ page.header_left }}
      </div>
      <div class=\"center-header__logo\">
       {{ page.header_center }}
      </div>
     <div class=\"center-header__right\">
       {{ page.header_right }}
     </div>
    </div>
  </div> 
  <div class=\"header__underline\"></div>

  <div class=\"container\">
    <div class=\"header__bottom bottom-header\">
     <div class=\"bottom-header__logos\">
      {{ page.header__logos }}
     </div>
     <div class=\"bottom-header__menu\">
       {{ page.menu }}
       
      <div class=\"bottom-header__burger\">
        <p class=\"icon-menu\">МЕНЮ</p>
        <div class=\"icon-menu\">
          <span></span>
          <span></span> {# hamburger icon #}
          <span></span>
        </div>
      </div>

      
     </div>
     <div class=\"bottom-header__icons\">
     
       <a href=\"#\" title=\"Версия для слабовидящих\">
        <svg class=\"art\"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -.7 42 42\"><path fill-rule=\"evenodd\" d=\"M42 8.5V32c-.8 4.6-4.1 8.8-9.8 8.4-4.6-.3-7.6-3.3-8.5-7.2-.1-.5-.2-1.2-.5-1.7-.8-1.5-3.6-1.4-4.3 0-.4.7-.2 1.5-.5 2.4-.3 1.1-1.1 3-2 2.6-.8-.3.1-1.4.3-2 2.9-6.1-2.6-12.9-9.2-11.3C4.2 24 1 27 1.3 31.6c.3 5.3 6.2 9.7 11.8 6.7.5-.3.9-.5 1.3-.8.3-.2.7-.9 1.4-.4.3 1.1-1.5 2.1-2.5 2.5C7 42.6.4 37.7 0 32V8.5C.2 6.4.8 5 1.7 3.4 2.4 2.2 3.5.1 5.2 0c1.3-.1 2.2 1 2.1 2.2-.1.7-.6 1-1.1 1.6-.5.5-.8 1.1-1.1 1.6-2.4 4.3-.7 12-1.2 18.1 1.4-.8 3.3-1.7 5.5-1.7 4.3 0 7.1 2.8 8.6 5.6 1.5-1 4.7-.9 6.2 0 .4-.7.6-1.3 1.1-1.9.5-.7 2-2.5 2.7-1.6.6.7-.3 1-.7 1.4-.5.4-.9 1-1.1 1.3-3.7 5.3.2 12.4 6.2 12.7 5 .3 7.9-3.3 8.4-6.9.7-4.7-2.3-8.1-6.2-9.1-1-.2-2.4-.3-3.5-.1-.7.1-2.3 1.1-2.4 0-.1-.6 1-.9 1.6-1.1 2.1-.5 4.4-.3 6.1.4.7.3 1.4 1 1.8.9-.4-5.9 1-14-1.2-18-.5-.9-2.1-2.2-2.1-3.3C34.8.9 35.7-.1 37 0c1.5.1 2.7 2.1 3.4 3.3.9 1.7 1.4 3.5 1.6 5.2zm-39.4 16c.2-.8 0-2 0-3.2v-9.8c0-3.5.6-5.7 2.1-7.7.3-.4 1.4-1.4 1.3-2-.1-.5-.8-.7-1.1-.4C3 3 1.4 5.7 1.2 8.9c-.3 5.7.2 11.9 0 17.5.4-.6 1.2-1.1 1.4-1.9zM39.5 4.4c-.5-1-1.6-2.9-2.8-3.1-.5-.2-.7.6-.7.6-.1.7 1 1.4 1.3 1.9 1.5 2.1 2.1 4.1 2.1 7.8v9.8c0 1.2-.2 2.5 0 3.3.1.3.5.7.7 1 .2.3.5.9.7.7-.6-6.9 1.3-17.1-1.3-22zM18.3 28.7c.2.3.2.7.2 1.2 1.2-.9 3.7-.9 4.9 0 0-.5.1-.9.2-1.3-1.1-.9-4.2-1-5.3.1z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8.5 24.7c4-.5 7.1 2.4 7.4 6 .4 5.5-5.5 8.8-9.9 6.2-2.2-1.3-4.4-5-2.6-8.6.6-1.4 2.4-3.3 5.1-3.6zM4 30.3c-.7 4.8 4 7.3 7.4 5.9 2-.8 3.5-2.9 3.3-5.5-.2-2.9-2.8-5.2-6-4.8-2.3.3-4.3 1.9-4.7 4.4zM31.9 24.7c3.8-.4 6.9 2.3 7.3 5.6.5 4.7-3.2 7.9-7.4 7.5-4-.4-7.2-5-5.2-9.4.8-1.7 2.8-3.4 5.3-3.7zm-4.6 6.1c-.2 2.4 1.3 4.5 3.1 5.3 3.6 1.6 6.7-.8 7.4-3.4 1.1-4.1-2.2-7.2-5.8-6.7-2.5.2-4.5 2-4.7 4.8z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M7.1 30.8c0-.6.9-1.8 1.4-1.8 1.9-.2-.4 3.1-1.4 1.8zM31.8 29c.2 0 .6-.1.7.3.3.9-2 2.6-2.2 1.3 0-.5 1.2-1.5 1.5-1.6zM10.8 29.5c1.9.4-.1 1.8-.7 2.4-.3.3-2 2.4-2.3 1.1-.2-1 2.8-2.9 3-3.5zM34.2 29.6c.3-.1.7 0 .7.4.2.7-1.1 1.6-1.5 2-.3.3-2.1 2.4-2.4.9-.1-.5 1-1.4 1.3-1.7.7-.7 1.3-1.5 1.9-1.6z\" clip-rule=\"evenodd\"/></svg>
        </svg>
        {# <img class=\"icon-impaired art\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/glasses.svg\" alt=\"вход на сайт\"> #}
        {#<i class=\"material-icons main-color\">face</i> #}
       </a>

       <a href=\"/search\" title=\"Поиск\">
        {# <i class=\"material-icons main-color\">search</i> #}
        <img class=\"icon-impaired\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/search.svg\" alt=\"поиск\">
      </a>
        

      {% if logged_in == false %}
       <!-- Modal Trigger -->
        <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
        <img class=\"icon-impaired\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/input.svg\" alt=\"вход на сайт\">
        </a>
      {% endif %}

      {% if logged_in %}
        <a class=\"link unregister\" title=\"вход на сайт\" href=\"{{ path('user.logout') }}\">

         {# <i class=\"material-icons main-color\">logout</i> #}
        </a>
      {% endif %}

     </div>
    </div>
  </div> 

</header>






<main class=\"main\">
 <div class=\"container\">
  {{ page.content }}
 </div>
</main>

<footer class=\"footer\">
 <div class=\"container\">
  {{ page.footer }}
 </div>
</footer>


  <!-- modal_login Structure -->
<div id=\"modal_login\" class=\"modal\">
  <div class=\"modal-content\">
      <form class=\"user-login-form antibot\" data-drupal-selector=\"user-login-form\" data-action=\"/user/login\" action=\"/user/login\" method=\"post\" id=\"user-login-form\" accept-charset=\"UTF-8\">
        <noscript>
          <div class=\"antibot-no-js antibot-message antibot-message-warning\">Вы должны включить JavaScript чтобы использовать эту форму.</div>
        </noscript>
        
        <label>Имя пользователя</label>
        <input autocorrect=\"none\" autocapitalize=\"none\" spellcheck=\"false\" autofocus=\"autofocus\" data-drupal-selector=\"edit-name\" aria-describedby=\"edit-name--description\" type=\"text\" id=\"edit-name\" name=\"name\" value=\"\" size=\"60\" maxlength=\"60\" class=\"form-text required\" required=\"required\" aria-required=\"true\">

        <label for=\"edit-pass\" class=\"js-form-required form-required active\">Пароль</label>
        <input data-drupal-selector=\"edit-pass\" aria-describedby=\"edit-pass--description\" type=\"password\" id=\"edit-pass\" name=\"pass\" size=\"60\" maxlength=\"128\" class=\"form-text required\" required=\"required\" aria-required=\"true\">

        <input data-drupal-selector=\"edit-user-login-form\" type=\"hidden\" name=\"form_id\" value=\"user_login_form\">
        
        <input data-drupal-selector=\"edit-antibot-key\" type=\"hidden\" name=\"antibot_key\" value=\"bUcEpvn70wYuyn-OQ8_zbOdLXsI15V0oE8hkQKaU4z8\">

  <div class=\"modal-footer\">
    <button type=\"submit\" class=\"waves-effect waves-light btn modal-trigger\">
       войти<i class=\"material-icons right\">login</i>
    </button>
   </div>
  </form>
 </div>
</div>






{# <div id=\"button-up\">
<span class=\"button-up-txt\">Наверх ^</span>
</div> #}









", "sites/default/themes/custom/start_theme/templates/page.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 54);
        static $filters = array("escape" => 3);
        static $functions = array("path" => 62);

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                ['path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
