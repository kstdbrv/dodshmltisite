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
 <div class=\"container\">
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

    <aside class=\"section-1__banners banners-custom\"></aside>
</section>

";
        // line 99
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_center", [], "any", false, false, true, 99)) {
            // line 100
            echo "<section class=\"section-2";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["grid"] ?? null), 100, $this->source), "html", null, true);
            echo "\">
";
            // line 101
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_left", [], "any", false, false, true, 101)) {
                // line 102
                echo "  <aside class=\"section-2__left wow animate__animated animate__slideInLeft\" data-wow-offset=\"100\">
    ";
                // line 103
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_left", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                echo "
  </aside>
";
            }
            // line 106
            echo "  <div class=\"section-2__content wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
    ";
            // line 107
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_center", [], "any", false, false, true, 107), 107, $this->source), "html", null, true);
            echo "
  </div>
";
            // line 109
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_right", [], "any", false, false, true, 109)) {
                // line 110
                echo "  <aside class=\"section-2__right wow animate__animated animate__slideInRight\" data-wow-offset=\"100\">
     ";
                // line 111
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_right", [], "any", false, false, true, 111), 111, $this->source), "html", null, true);
                echo "
  </aside>
";
            }
            // line 113
            echo "  
</section>
";
        }
        // line 116
        echo "
";
        // line 117
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_3", [], "any", false, false, true, 117)) {
            // line 118
            echo "<section class=\"section-3 wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
  <div class=\"container\">
  ";
            // line 120
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_3", [], "any", false, false, true, 120), 120, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 124
        echo "
";
        // line 125
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_4", [], "any", false, false, true, 125)) {
            // line 126
            echo "<section class=\"section-4 wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
  <div class=\"container\">
  ";
            // line 128
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_4", [], "any", false, false, true, 128), 128, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 132
        echo "
";
        // line 133
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_5", [], "any", false, false, true, 133)) {
            // line 134
            echo "<section class=\"section-5\">
  <div class=\"container\">
  ";
            // line 136
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_5", [], "any", false, false, true, 136), 136, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 140
        echo "
";
        // line 141
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_6", [], "any", false, false, true, 141)) {
            // line 142
            echo "<section class=\"section-6\">
  <div class=\"container\">
  ";
            // line 144
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_6", [], "any", false, false, true, 144), 144, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 148
        echo "
";
        // line 149
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_7", [], "any", false, false, true, 149)) {
            // line 150
            echo "<section class=\"section-7\">
  <div class=\"container\">
  ";
            // line 152
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_7", [], "any", false, false, true, 152), 152, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 156
        echo "
";
        // line 157
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_8", [], "any", false, false, true, 157)) {
            // line 158
            echo "<section class=\"section-8\">
  <div class=\"container\">
  ";
            // line 160
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_8", [], "any", false, false, true, 160), 160, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 164
        echo "
<footer class=\"footer\">
 <div class=\"container\">
  ";
        // line 167
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 167), 167, $this->source), "html", null, true);
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
        // line 202
        echo "<div class=\"button-up\" title=\"вверх\"></div>";
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
        return array (  375 => 202,  338 => 167,  333 => 164,  326 => 160,  322 => 158,  320 => 157,  317 => 156,  310 => 152,  306 => 150,  304 => 149,  301 => 148,  294 => 144,  290 => 142,  288 => 141,  285 => 140,  278 => 136,  274 => 134,  272 => 133,  269 => 132,  262 => 128,  258 => 126,  256 => 125,  253 => 124,  246 => 120,  242 => 118,  240 => 117,  237 => 116,  232 => 113,  226 => 111,  223 => 110,  221 => 109,  216 => 107,  213 => 106,  207 => 103,  204 => 102,  202 => 101,  197 => 100,  195 => 99,  186 => 93,  179 => 89,  174 => 86,  167 => 82,  163 => 80,  161 => 79,  158 => 78,  151 => 74,  147 => 72,  145 => 71,  136 => 64,  127 => 57,  117 => 49,  109 => 45,  107 => 44,  104 => 43,  97 => 38,  95 => 37,  84 => 29,  76 => 24,  68 => 19,  62 => 16,  51 => 8,  45 => 5,  39 => 1,);
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
 <div class=\"container\">
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

    <aside class=\"section-1__banners banners-custom\"></aside>
</section>

{% if page.section_2_center %}
<section class=\"section-2{{ grid }}\">
{% if page.section_2_left %}
  <aside class=\"section-2__left wow animate__animated animate__slideInLeft\" data-wow-offset=\"100\">
    {{ page.section_2_left }}
  </aside>
{% endif %}
  <div class=\"section-2__content wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
    {{ page.section_2_center }}
  </div>
{% if page.section_2_right %}
  <aside class=\"section-2__right wow animate__animated animate__slideInRight\" data-wow-offset=\"100\">
     {{ page.section_2_right }}
  </aside>
{% endif %}  
</section>
{% endif %}

{% if page.section_3 %}
<section class=\"section-3 wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
  <div class=\"container\">
  {{ page.section_3 }}
  </div>
</section>
{% endif %}

{% if page.section_4 %}
<section class=\"section-4 wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
  <div class=\"container\">
  {{ page.section_4 }}
  </div>
</section>
{% endif %}

{% if page.section_5 %}
<section class=\"section-5\">
  <div class=\"container\">
  {{ page.section_5 }}
  </div>
</section>
{% endif %}

{% if page.section_6 %}
<section class=\"section-6\">
  <div class=\"container\">
  {{ page.section_6 }}
  </div>
</section>
{% endif %}

{% if page.section_7 %}
<section class=\"section-7\">
  <div class=\"container\">
  {{ page.section_7 }}
  </div>
</section>
{% endif %}

{% if page.section_8 %}
<section class=\"section-8\">
  <div class=\"container\">
  {{ page.section_8 }}
  </div>
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



{#  кнопка вверх #}
<div class=\"button-up\" title=\"вверх\"></div>", "sites/default/themes/custom/start_theme/templates/page.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/page.html.twig");
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
