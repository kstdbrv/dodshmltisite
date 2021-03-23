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
class __TwigTemplate_1a975bcba8a30f932b8f04178bdd1f5c5df12296b86b4501d01ea447c442b4f9 extends \Twig\Template
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
     
        <a class=\"icon-impaired\" href=\"#\" title=\"Версия для слабовидящих\">
        <img  class=\"icons_header\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/glasses.svg\" alt=\"вход на сайт\"/>
        ";
        // line 44
        echo "        ";
        // line 45
        echo "       </a>
       
       <a href=\"/search\" title=\"Поиск\">
        ";
        // line 49
        echo "        <img class=\"icons_header\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/search.svg\" alt=\"поиск\">
      </a>
        
      ";
        // line 52
        if ((($context["logged_in"] ?? null) == false)) {
            // line 53
            echo "       <!-- Modal Trigger -->
        <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
        <img class=\"icons_header\" src=\"/sites/default/themes/custom/start_theme/assets/images/icons/input.svg\" alt=\"вход на сайт\">
        </a>
      ";
        }
        // line 58
        echo "
      ";
        // line 59
        if (($context["logged_in"] ?? null)) {
            // line 60
            echo "        <a class=\"link unregister\" title=\"вход на сайт\" href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("user.logout"));
            echo "\">
         <i class=\"material-icons main-color\">logout</i>
        </a>
      ";
        }
        // line 64
        echo "
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
<section class=\"slider-banner\">
 <div class=\"container-no-padding\">
  ";
        // line 81
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slider", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
        echo "
 </div>
</section>

<section class=\"container section-1\">
 
    <aside class=\"section-1__main-menu menu-main\">
      ";
        // line 88
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_menu", [], "any", false, false, true, 88), 88, $this->source), "html", null, true);
        echo "
    </aside>

    <div class=\"section-1__content\">
      ";
        // line 92
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "section_1", [], "any", false, false, true, 92), 92, $this->source), "html", null, true);
        echo "
    </div>

    <div class=\"section-1__banners\">
  
    </div>

</section>












<footer class=\"footer\">
 <div class=\"container\">
  ";
        // line 114
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 114), 114, $this->source), "html", null, true);
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
        // line 154
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
        return array (  245 => 154,  205 => 114,  180 => 92,  173 => 88,  163 => 81,  158 => 78,  151 => 74,  147 => 72,  145 => 71,  136 => 64,  128 => 60,  126 => 59,  123 => 58,  116 => 53,  114 => 52,  109 => 49,  104 => 45,  102 => 44,  90 => 33,  81 => 26,  75 => 23,  63 => 14,  57 => 11,  51 => 8,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/default/themes/custom/start_theme/templates/page.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 52);
        static $filters = array("escape" => 3);
        static $functions = array("path" => 60);

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
