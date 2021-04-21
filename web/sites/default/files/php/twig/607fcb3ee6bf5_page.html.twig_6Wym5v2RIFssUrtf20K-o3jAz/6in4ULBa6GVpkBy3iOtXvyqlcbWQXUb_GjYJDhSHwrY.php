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
class __TwigTemplate_76aa7a218832bf70e335796cf4e7b5a54ed169a90bbf2b32e8b5b10e2777474b extends \Twig\Template
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

  <div class=\"header__top top-header container\">
    <div class=\"top-header__column\">
     ";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top_left", [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
        echo "
    </div>
    <div class=\"top-header__column\">
      ";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top_right", [], "any", false, false, true, 8), 8, $this->source), "html", null, true);
        echo "
     </div>
  </div>

  <div class=\"header__center center-header\">
    <div class=\"container\">
      <div class=\"center-header__column\">
     <div class=\"center-header__flags\">
      ";
        // line 16
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_flags", [], "any", false, false, true, 16), 16, $this->source), "html", null, true);
        echo "
     </div>
     <div class=\"center-header__name\">
      ";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_name", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
        echo "
     </div>
      </div>

      <div class=\"center-header__column\">
     ";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_logo", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
        echo "
      </div>

      <div class=\"center-header__column\">
    <div class=\"center-header__contacts\">
      ";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_contacts", [], "any", false, false, true, 29), 29, $this->source), "html", null, true);
        echo "
     </div>

     <div class=\"center-header__icons\" data-da=\"bottom-header,3,1450\">
       <a class=\"icon-impaired\" href=\"#\" title=\"Версия для слабовидящих\">
         <img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/eye.png\" alt=\"Версия для слабовидящих\">
       </a>

       ";
        // line 37
        if ((($context["logged_in"] ?? null) == false)) {
            // line 38
            echo "       <!-- Modal Trigger -->
       <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
         <img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/login.png\" alt=\"Вход на сайт\">
       </a>
       ";
        }
        // line 43
        echo "
       ";
        // line 44
        if (($context["logged_in"] ?? null)) {
            // line 45
            echo "       <a class=\"link unregister\" title=\"вход на сайт\" href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("user.logout"));
            echo "\">
         <i class=\"material-icons main-color\">logout</i>
       </a>
       ";
        }
        // line 49
        echo "    </div>

      </div>
    </div>
  </div>

  <div class=\"header__bottom bottom-header container\">
    <div class=\"bottom-header__menu\">
      ";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "menu", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "
     </div> 
     <div class=\"bottom-header__burger\">
       <p class=\"icon-menu\">МЕНЮ</p>
       <div class=\"icon-menu\">
         <span></span>
         <span></span> ";
        // line 64
        echo "         <span></span>
       </div>
     </div>
  </div>
     
</header>

";
        // line 71
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "system", [], "any", false, false, true, 71)) {
            // line 72
            echo "<section class=\"system\">
  <div class=\"container\">
    ";
            // line 74
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "system", [], "any", false, false, true, 74), 74, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 78
        echo "
";
        // line 79
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slider", [], "any", false, false, true, 79)) {
            // line 80
            echo "<section class=\"slider-banner\">
 <div class=\"container-no-padding\">
  ";
            // line 82
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slider", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
            echo "
 </div>
</section>
";
        }
        // line 86
        echo "
<section class=\"container section-1\">
    <aside class=\"section-1__main-menu menu-main\">
      ";
        // line 89
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_menu", [], "any", false, false, true, 89), 89, $this->source), "html", null, true);
        echo "
    </aside>

    <div class=\"section-1__content content-section-1\">
      ";
        // line 93
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_1", [], "any", false, false, true, 93), 93, $this->source), "html", null, true);
        echo "
    </div>

    <aside class=\"section-1__banners banners-custom\">
      ";
        // line 97
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "banners_right", [], "any", false, false, true, 97), 97, $this->source), "html", null, true);
        echo "
    </aside>
</section>

";
        // line 101
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_center", [], "any", false, false, true, 101)) {
            // line 102
            echo "<section class=\"section-2";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["grid"] ?? null), 102, $this->source), "html", null, true);
            echo "\">
";
            // line 103
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_left", [], "any", false, false, true, 103)) {
                // line 104
                echo "  <aside class=\"section-2__left\">
    ";
                // line 105
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_left", [], "any", false, false, true, 105), 105, $this->source), "html", null, true);
                echo "
  </aside>
";
            }
            // line 108
            echo "  <div class=\"section-2__content\">
    ";
            // line 109
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_center", [], "any", false, false, true, 109), 109, $this->source), "html", null, true);
            echo "
  </div>
";
            // line 111
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_right", [], "any", false, false, true, 111)) {
                // line 112
                echo "  <aside class=\"section-2__right\">
     ";
                // line 113
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_right", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
                echo "
  </aside>
";
            }
            // line 115
            echo "  
</section>
";
        }
        // line 118
        echo "
";
        // line 119
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_3", [], "any", false, false, true, 119)) {
            // line 120
            echo "<section class=\"section-3 container\">
  ";
            // line 121
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_3", [], "any", false, false, true, 121), 121, $this->source), "html", null, true);
            echo "
</section>
";
        }
        // line 124
        echo "
";
        // line 125
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_4", [], "any", false, false, true, 125)) {
            // line 126
            echo "<section class=\"section-4 container\">
  ";
            // line 127
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_4", [], "any", false, false, true, 127), 127, $this->source), "html", null, true);
            echo "
</section>
";
        }
        // line 130
        echo "
<footer class=\"footer\">
 <div class=\"container\">
  ";
        // line 133
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 133), 133, $this->source), "html", null, true);
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
        return array (  275 => 133,  270 => 130,  264 => 127,  261 => 126,  259 => 125,  256 => 124,  250 => 121,  247 => 120,  245 => 119,  242 => 118,  237 => 115,  231 => 113,  228 => 112,  226 => 111,  221 => 109,  218 => 108,  212 => 105,  209 => 104,  207 => 103,  202 => 102,  200 => 101,  193 => 97,  186 => 93,  179 => 89,  174 => 86,  167 => 82,  163 => 80,  161 => 79,  158 => 78,  151 => 74,  147 => 72,  145 => 71,  136 => 64,  127 => 57,  117 => 49,  109 => 45,  107 => 44,  104 => 43,  97 => 38,  95 => 37,  84 => 29,  76 => 24,  68 => 19,  62 => 16,  51 => 8,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<header class=\"header\">

  <div class=\"header__top top-header container\">
    <div class=\"top-header__column\">
     {{ page.header_top_left }}
    </div>
    <div class=\"top-header__column\">
      {{ page.header_top_right }}
     </div>
  </div>

  <div class=\"header__center center-header\">
    <div class=\"container\">
      <div class=\"center-header__column\">
     <div class=\"center-header__flags\">
      {{ page.header_center_flags }}
     </div>
     <div class=\"center-header__name\">
      {{ page.header_center_name }}
     </div>
      </div>

      <div class=\"center-header__column\">
     {{ page.header_center_logo }}
      </div>

      <div class=\"center-header__column\">
    <div class=\"center-header__contacts\">
      {{ page.header_center_contacts }}
     </div>

     <div class=\"center-header__icons\" data-da=\"bottom-header,3,1450\">
       <a class=\"icon-impaired\" href=\"#\" title=\"Версия для слабовидящих\">
         <img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/eye.png\" alt=\"Версия для слабовидящих\">
       </a>

       {% if logged_in == false %}
       <!-- Modal Trigger -->
       <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
         <img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/login.png\" alt=\"Вход на сайт\">
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
  </div>

  <div class=\"header__bottom bottom-header container\">
    <div class=\"bottom-header__menu\">
      {{ page.menu }}
     </div> 
     <div class=\"bottom-header__burger\">
       <p class=\"icon-menu\">МЕНЮ</p>
       <div class=\"icon-menu\">
         <span></span>
         <span></span> {# hamburger icon #}
         <span></span>
       </div>
     </div>
  </div>
     
</header>

{% if page.system %}
<section class=\"system\">
  <div class=\"container\">
    {{ page.system }}
  </div>
</section>
{% endif %}

{% if page.slider %}
<section class=\"slider-banner\">
 <div class=\"container-no-padding\">
  {{ page.slider }}
 </div>
</section>
{% endif %}

<section class=\"container section-1\">
    <aside class=\"section-1__main-menu menu-main\">
      {{ page.sidebar_menu }}
    </aside>

    <div class=\"section-1__content content-section-1\">
      {{ page.section_1 }}
    </div>

    <aside class=\"section-1__banners banners-custom\">
      {{ page.banners_right }}
    </aside>
</section>

{% if page.section_2_center %}
<section class=\"section-2{{ grid }}\">
{% if page.section_2_left %}
  <aside class=\"section-2__left\">
    {{ page.section_2_left }}
  </aside>
{% endif %}
  <div class=\"section-2__content\">
    {{ page.section_2_center }}
  </div>
{% if page.section_2_right %}
  <aside class=\"section-2__right\">
     {{ page.section_2_right }}
  </aside>
{% endif %}  
</section>
{% endif %}

{% if page.section_3 %}
<section class=\"section-3 container\">
  {{ page.section_3 }}
</section>
{% endif %}

{% if page.section_4 %}
<section class=\"section-4 container\">
  {{ page.section_4 }}
</section>
{% endif %}

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
</div> #}", "sites/default/themes/custom/start_theme/templates/page.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 37);
        static $filters = array("escape" => 5);
        static $functions = array("path" => 45);

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
