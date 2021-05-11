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
        echo "
";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("start_search_vue/main"), "html", null, true);
        echo "

<header class=\"header\">

  <div class=\"header__top top-header container\">
    <div class=\"top-header__column\">
     ";
        // line 9
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top_left", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
        echo "
     ";
        // line 11
        echo "     <div id=\"vue-search\"></div>
    </div>
    <div class=\"top-header__column\">
      ";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top_right", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
        echo "
     </div>
  </div>

  <div class=\"header__center center-header\">
    <div class=\"container\">
      <div class=\"center-header__column\">
     <div class=\"center-header__flags\">
      ";
        // line 22
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_flags", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
        echo "
     </div>
     <div class=\"center-header__name\">
      ";
        // line 25
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_name", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
        echo "
     </div>
      </div>

      <div class=\"center-header__column\">
     ";
        // line 30
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_logo", [], "any", false, false, true, 30), 30, $this->source), "html", null, true);
        echo "
      </div>

      <div class=\"center-header__column\">
    <div class=\"center-header__contacts\">
      ";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center_contacts", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
        echo "
     </div>

     <div class=\"center-header__icons\" data-da=\"bottom-header,3,1450\">
       <a class=\"icon-impaired\" href=\"#\" title=\"Версия для слабовидящих\">
         <img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/eye.png\" alt=\"Версия для слабовидящих\">
       </a>

       ";
        // line 43
        if ((($context["logged_in"] ?? null) == false)) {
            // line 44
            echo "       <!-- Modal Trigger -->
       <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
         <img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/login.png\" alt=\"Вход на сайт\">
       </a>
       ";
        }
        // line 49
        echo "
       ";
        // line 50
        if (($context["logged_in"] ?? null)) {
            // line 51
            echo "       <a class=\"link-unregister\" title=\"выход\" href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("user.logout"));
            echo "\"><img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/logout.svg\" alt=\"выход\"></a>
       ";
        }
        // line 53
        echo "    </div>

      </div>
    </div>
  </div>

  <div class=\"header__bottom bottom-header container\">
    <div class=\"bottom-header__menu\">
      ";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "menu", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
        echo "
     </div> 
     <div class=\"bottom-header__burger\">
       <p class=\"icon-menu\">МЕНЮ</p>
       <div class=\"icon-menu\">
         <span></span>
         <span></span> ";
        // line 68
        echo "         <span></span>
       </div>
     </div>
  </div>
     
</header>

";
        // line 75
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "system", [], "any", false, false, true, 75)) {
            // line 76
            echo "<section class=\"system\">
  <div class=\"container\">
    ";
            // line 78
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "system", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 82
        echo "
";
        // line 83
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slider", [], "any", false, false, true, 83)) {
            // line 84
            echo "<section class=\"slider-banner\">
 <div class=\"container\">
  ";
            // line 86
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slider", [], "any", false, false, true, 86), 86, $this->source), "html", null, true);
            echo "
 </div>
</section>
";
        }
        // line 90
        echo "
<section class=\"container section-1\">
    <aside class=\"section-1__main-menu menu-main\">
      ";
        // line 93
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_menu", [], "any", false, false, true, 93), 93, $this->source), "html", null, true);
        echo "
    </aside>

    <div class=\"section-1__content content-section-1\">
      ";
        // line 97
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_1", [], "any", false, false, true, 97), 97, $this->source), "html", null, true);
        echo "
    </div>

    <aside class=\"section-1__banners banners-custom\">
      <div class=\"banners-custom__inner\"></din>
    </aside>
</section>

";
        // line 105
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_center", [], "any", false, false, true, 105)) {
            // line 106
            echo "<section class=\"section-2";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["grid"] ?? null), 106, $this->source), "html", null, true);
            echo "\">
";
            // line 107
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_left", [], "any", false, false, true, 107)) {
                // line 108
                echo "  <aside class=\"section-2__left wow animate__animated animate__slideInLeft\" data-wow-offset=\"100\">
    ";
                // line 109
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_left", [], "any", false, false, true, 109), 109, $this->source), "html", null, true);
                echo "
  </aside>
";
            }
            // line 112
            echo "  <div class=\"section-2__content wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
    ";
            // line 113
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_center", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
            echo "
  </div>
";
            // line 115
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_right", [], "any", false, false, true, 115)) {
                // line 116
                echo "  <aside class=\"section-2__right wow animate__animated animate__slideInRight\" data-wow-offset=\"100\">
     ";
                // line 117
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_2_right", [], "any", false, false, true, 117), 117, $this->source), "html", null, true);
                echo "
  </aside>
";
            }
            // line 119
            echo "  
</section>
";
        }
        // line 122
        echo "
";
        // line 123
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_3", [], "any", false, false, true, 123)) {
            // line 124
            echo "<section class=\"section-3 wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
  <div class=\"container\">
  ";
            // line 126
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_3", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 130
        echo "
";
        // line 131
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_4", [], "any", false, false, true, 131)) {
            // line 132
            echo "<section class=\"section-4 wow animate__animated animate__slideInUp\" data-wow-offset=\"100\">
  <div class=\"container\">
  ";
            // line 134
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_4", [], "any", false, false, true, 134), 134, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 138
        echo "
";
        // line 139
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_5", [], "any", false, false, true, 139)) {
            // line 140
            echo "<section class=\"section-5\">
  <div class=\"container\">
  ";
            // line 142
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_5", [], "any", false, false, true, 142), 142, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 146
        echo "
";
        // line 147
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_6", [], "any", false, false, true, 147)) {
            // line 148
            echo "<section class=\"section-6\">
  <div class=\"container\">
  ";
            // line 150
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_6", [], "any", false, false, true, 150), 150, $this->source), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 154
        echo "
";
        // line 155
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_7", [], "any", false, false, true, 155)) {
            // line 156
            echo "<section class=\"section-7\">
  ";
            // line 157
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_7", [], "any", false, false, true, 157), 157, $this->source), "html", null, true);
            echo "
</section>
";
        }
        // line 160
        echo "
";
        // line 161
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_8", [], "any", false, false, true, 161)) {
            // line 162
            echo "<section class=\"section-8\">
  ";
            // line 163
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_8", [], "any", false, false, true, 163), 163, $this->source), "html", null, true);
            echo "
</section>
";
        }
        // line 166
        echo "
<footer class=\"footer\">
 <div class=\"footer__top top-footer container\">
  <div class=\"top-footer__left\">
   ";
        // line 170
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_top", [], "any", false, false, true, 170), 170, $this->source), "html", null, true);
        echo "
  </div>
  <div class=\"top-footer__right\">
   <div style=\"position:relative;overflow:hidden;\"><a href=\"https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps\" style=\"color:#eee;font-size:12px;position:absolute;top:0px;\">Краснодар</a><a href=\"https://yandex.ru/maps/profile?ll=38.963168%2C45.069047&utm_medium=mapframe&utm_source=maps&z=16\" style=\"color:#eee;font-size:12px;position:absolute;top:14px;\">Яндекс.Карты</a><iframe src=\"https://yandex.ru/map-widget/v1/-/CCU4i0RddB\" width=\"100%\" height=\"370px\" frameborder=\"0\" allowfullscreen=\"true\" style=\"position:relative;\"></iframe></div>  
  </div>
 </div>
  <div class=\"footer__bottom\">
  ";
        // line 177
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom", [], "any", false, false, true, 177), 177, $this->source), "html", null, true);
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
        <input autocorrect=\"none\" autocapitalize=\"none\" spellcheck=\"false\" autofocus=\"autofocus\" data-drupal-selector=\"edit-name\" aria-describedby=\"edit-name--description\" type=\"text\" id=\"edit-name\" name=\"name\" value=\"\" size=\"60\" maxlength=\"60\" class=\"form-text required\" required=\"required\" aria-required=\"true\" placeholder=\"введите имя пользователя\">

        <label for=\"edit-pass\" class=\"js-form-required form-required active\">Пароль</label>
        <input data-drupal-selector=\"edit-pass\" aria-describedby=\"edit-pass--description\" type=\"password\" id=\"edit-pass\" name=\"pass\" size=\"60\" maxlength=\"128\" class=\"form-text required\" required=\"required\" aria-required=\"true\" placeholder=\"введите пароль\">

        <input data-drupal-selector=\"edit-user-login-form\" type=\"hidden\" name=\"form_id\" value=\"user_login_form\">
        
        <input data-drupal-selector=\"edit-antibot-key\" type=\"hidden\" name=\"antibot_key\" value=\"bUcEpvn70wYuyn-OQ8_zbOdLXsI15V0oE8hkQKaU4z8\">

  <div class=\"modal-footer\">
    <button type=\"submit\" class=\"waves-effect waves-light btn modal-trigger\">
       войти
    </button>
   </div>
  </form>
 </div>
</div>



";
        // line 212
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
        return array (  391 => 212,  354 => 177,  344 => 170,  338 => 166,  332 => 163,  329 => 162,  327 => 161,  324 => 160,  318 => 157,  315 => 156,  313 => 155,  310 => 154,  303 => 150,  299 => 148,  297 => 147,  294 => 146,  287 => 142,  283 => 140,  281 => 139,  278 => 138,  271 => 134,  267 => 132,  265 => 131,  262 => 130,  255 => 126,  251 => 124,  249 => 123,  246 => 122,  241 => 119,  235 => 117,  232 => 116,  230 => 115,  225 => 113,  222 => 112,  216 => 109,  213 => 108,  211 => 107,  206 => 106,  204 => 105,  193 => 97,  186 => 93,  181 => 90,  174 => 86,  170 => 84,  168 => 83,  165 => 82,  158 => 78,  154 => 76,  152 => 75,  143 => 68,  134 => 61,  124 => 53,  118 => 51,  116 => 50,  113 => 49,  106 => 44,  104 => 43,  93 => 35,  85 => 30,  77 => 25,  71 => 22,  60 => 14,  55 => 11,  51 => 9,  42 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
{# добавляем VUE #}
{{ attach_library('start_search_vue/main') }}

<header class=\"header\">

  <div class=\"header__top top-header container\">
    <div class=\"top-header__column\">
     {{ page.header_top_left }}
     {# точка монтирования VUE #}
     <div id=\"vue-search\"></div>
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
       <a class=\"link-unregister\" title=\"выход\" href=\"{{ path('user.logout') }}\"><img src=\"/sites/default/themes/custom/start_theme/assets/images/icons/logout.svg\" alt=\"выход\"></a>
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

    <aside class=\"section-1__banners banners-custom\">
      <div class=\"banners-custom__inner\"></din>
    </aside>
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
  {{ page.section_7 }}
</section>
{% endif %}

{% if page.section_8 %}
<section class=\"section-8\">
  {{ page.section_8 }}
</section>
{% endif %}

<footer class=\"footer\">
 <div class=\"footer__top top-footer container\">
  <div class=\"top-footer__left\">
   {{ page.footer_top }}
  </div>
  <div class=\"top-footer__right\">
   <div style=\"position:relative;overflow:hidden;\"><a href=\"https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps\" style=\"color:#eee;font-size:12px;position:absolute;top:0px;\">Краснодар</a><a href=\"https://yandex.ru/maps/profile?ll=38.963168%2C45.069047&utm_medium=mapframe&utm_source=maps&z=16\" style=\"color:#eee;font-size:12px;position:absolute;top:14px;\">Яндекс.Карты</a><iframe src=\"https://yandex.ru/map-widget/v1/-/CCU4i0RddB\" width=\"100%\" height=\"370px\" frameborder=\"0\" allowfullscreen=\"true\" style=\"position:relative;\"></iframe></div>  
  </div>
 </div>
  <div class=\"footer__bottom\">
  {{ page.footer_bottom }}
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
        <input autocorrect=\"none\" autocapitalize=\"none\" spellcheck=\"false\" autofocus=\"autofocus\" data-drupal-selector=\"edit-name\" aria-describedby=\"edit-name--description\" type=\"text\" id=\"edit-name\" name=\"name\" value=\"\" size=\"60\" maxlength=\"60\" class=\"form-text required\" required=\"required\" aria-required=\"true\" placeholder=\"введите имя пользователя\">

        <label for=\"edit-pass\" class=\"js-form-required form-required active\">Пароль</label>
        <input data-drupal-selector=\"edit-pass\" aria-describedby=\"edit-pass--description\" type=\"password\" id=\"edit-pass\" name=\"pass\" size=\"60\" maxlength=\"128\" class=\"form-text required\" required=\"required\" aria-required=\"true\" placeholder=\"введите пароль\">

        <input data-drupal-selector=\"edit-user-login-form\" type=\"hidden\" name=\"form_id\" value=\"user_login_form\">
        
        <input data-drupal-selector=\"edit-antibot-key\" type=\"hidden\" name=\"antibot_key\" value=\"bUcEpvn70wYuyn-OQ8_zbOdLXsI15V0oE8hkQKaU4z8\">

  <div class=\"modal-footer\">
    <button type=\"submit\" class=\"waves-effect waves-light btn modal-trigger\">
       войти
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
        static $tags = array("if" => 43);
        static $filters = array("escape" => 3);
        static $functions = array("attach_library" => 3, "path" => 51);

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                ['attach_library', 'path']
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
