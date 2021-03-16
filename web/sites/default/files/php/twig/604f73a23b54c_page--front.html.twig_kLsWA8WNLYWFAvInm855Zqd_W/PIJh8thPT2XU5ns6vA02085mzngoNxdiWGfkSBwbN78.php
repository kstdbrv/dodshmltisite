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

/* sites/default/themes/custom/start_theme/templates/page--front.html.twig */
class __TwigTemplate_d211d424b5c7fd62804fe0b60f7b29d5ed53372539d9fecb8e6e660fd7116630 extends \Twig\Template
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
     <div class=\"center-header__right\" data-da=\"center-header__right,0,1025\">
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
        <img class=\"icon-impaired\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/impraired.png\" alt=\"вход на сайт\">
        ";
        // line 43
        echo "       </a>
       <a href=\"/search\" title=\"Поиск\">
        <i class=\"material-icons main-color\">search</i>
      </a>

      ";
        // line 48
        if ((($context["logged_in"] ?? null) == false)) {
            // line 49
            echo "       <!-- Modal Trigger -->
        <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
        <i class=\"material-icons main-color\">login</i>
        </a>
      ";
        }
        // line 54
        echo "
      ";
        // line 55
        if (($context["logged_in"] ?? null)) {
            // line 56
            echo "        <a class=\"link unregister\" title=\"вход на сайт\" href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("user.logout"));
            echo "\">
         <i class=\"material-icons main-color\">logout</i>
        </a>
      ";
        }
        // line 60
        echo "
     </div>
    </div>
  </div> 

</header>






<main class=\"main\">
 <div class=\"container\">
  ";
        // line 74
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 74), 74, $this->source), "html", null, true);
        echo "
 </div>
</main>

<footer class=\"footer\">
 <div class=\"container\">
  ";
        // line 80
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 80), 80, $this->source), "html", null, true);
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
        // line 120
        echo "








";
    }

    public function getTemplateName()
    {
        return "sites/default/themes/custom/start_theme/templates/page--front.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  195 => 120,  155 => 80,  146 => 74,  130 => 60,  122 => 56,  120 => 55,  117 => 54,  110 => 49,  108 => 48,  101 => 43,  90 => 33,  81 => 26,  75 => 23,  63 => 14,  57 => 11,  51 => 8,  43 => 3,  39 => 1,);
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
     <div class=\"center-header__right\" data-da=\"center-header__right,0,1025\">
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
        <img class=\"icon-impaired\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/impraired.png\" alt=\"вход на сайт\">
        {#<i class=\"material-icons main-color\">face</i> #}
       </a>
       <a href=\"/search\" title=\"Поиск\">
        <i class=\"material-icons main-color\">search</i>
      </a>

      {% if logged_in == false %}
       <!-- Modal Trigger -->
        <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
        <i class=\"material-icons main-color\">login</i>
        </a>
      {% endif %}

      {% if logged_in %}
        <a class=\"link unregister\" title=\"вход на сайт\" href=\"{{ path('user.logout') }}\">
         <i class=\"material-icons main-color\">logout</i>
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









", "sites/default/themes/custom/start_theme/templates/page--front.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/page--front.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 48);
        static $filters = array("escape" => 3);
        static $functions = array("path" => 56);

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
