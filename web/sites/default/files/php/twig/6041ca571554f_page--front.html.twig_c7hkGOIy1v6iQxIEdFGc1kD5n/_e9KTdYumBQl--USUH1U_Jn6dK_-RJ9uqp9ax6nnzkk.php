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
class __TwigTemplate_6cf27c08ada8bad30609ac6d70bd043b72e68c504b078746420ce960a050fee0 extends \Twig\Template
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
        echo "<div class=\"wrap-oo\">
\t<div class=\"oo\">
      \t<header>
        \t<div class=\"header_top\">
\t  \t\t\t<div class=\"container\">
          \t\t\t<div class=\"row\">
            \t\t\t
\t\t\t\t\t\t\t";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top", [], "any", false, false, true, 8), 8, $this->source), "html", null, true);
        echo "
             \t\t\t
           \t\t\t</div>
          \t\t</div>
\t\t\t</div>
\t\t\t<div class=\"header_center bgcolor_darkBlue\">
\t\t\t\t<div class=\"container vs\">
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-md-2\">
\t\t\t\t\t\t\t";
        // line 17
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_left", [], "any", false, false, true, 17), 17, $this->source), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-md-8\">
\t\t\t\t\t\t\t";
        // line 20
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_center", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t            \t<div class=\"col-md-2 key\">
\t\t            \t\t<a  class=\"vs_panel\" href=\"#\" title=\"Версия для слабовидящих\">
\t\t\t\t\t<span class=\"vs_img\"></span>
                            </a>
\t\t\t\t<a class=\"search_btn\" href=\"/search\" title=\"Поиск\"></a>
\t\t\t\t\t\t\t";
        // line 27
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_right", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t    </div>
\t\t    <div class=\"header_info\">
\t\t        <div class=\"container\">
\t\t            <div class=\"row\">
\t\t            \t<div class=\"col-md-12\">
\t\t                \t";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_info", [], "any", false, false, true, 36), 36, $this->source), "html", null, true);
        echo "
\t\t             \t</div>
\t\t            </div>
\t\t         </div>
\t\t    </div>
\t\t</header>\t
        <nav class=\"top_menu bgcolor_darkBlue\">
\t  \t\t<div class=\"container\">        
\t\t\t  <div class=\"row\">
                           
\t\t\t\t\t";
        // line 46
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_top", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
        echo "
                          
\t\t\t </div>\t
\t\t\t</div>
\t\t</nav>
\t\t<!--main-->
                <div class=\"main\">
\t\t<div class=\"container\" role=\"main\">
\t\t\t<div class=\"row\">
\t\t\t\t<div class=\"col-md-3\">
\t\t\t\t\t<div class=\"sidebar left_sidebar\">
\t\t\t\t\t\t";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "system_menu", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "
\t\t\t\t\t\t";
        // line 58
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "left_sidebar", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
        echo "
                \t</div>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-6 content\">
\t\t\t\t\t";
        // line 62
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "system", [], "any", false, false, true, 62), 62, $this->source), "html", null, true);
        echo "
\t\t\t\t\t<div class=\"vs_voice\"><div class=\"main_top\">";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_top", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
        echo "</div>";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
        echo "</div>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-3\">
\t\t\t\t\t<div class=\"sidebar right_sidebar\">
\t                    ";
        // line 67
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "right_sidebar", [], "any", false, false, true, 67), 67, $this->source), "html", null, true);
        echo "
\t                </div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
               </div>
             <div class=\"screen screen_1\">
            
               <div class=\"wrap\">
           
                 ";
        // line 77
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_1", [], "any", false, false, true, 77), 77, $this->source), "html", null, true);
        echo "
\t\t
               </div>
             </div>
             <div class=\"line_img\">
              <img src=\"";
        // line 82
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<front>"));
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null), 82, $this->source), "html", null, true);
        echo "/images/oblbgt.png\">
             </div>
             <div class=\"screen screen_2\">
               <div class=\"wrap\">

                 ";
        // line 87
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_2", [], "any", false, false, true, 87), 87, $this->source), "html", null, true);
        echo "

               </div>
             </div>
             <div class=\"screen screen_3\">
               <div class=\"container\">
                <div class=\"row\">
                  <div class=\"wrap2\">

                  ";
        // line 96
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_3", [], "any", false, false, true, 96), 96, $this->source), "html", null, true);
        echo "
                  </div>
                </div>
               </div>
             </div>
             <div class=\"screen screen_4\">
               <div class=\"wrap\">

                 ";
        // line 104
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_4", [], "any", false, false, true, 104), 104, $this->source), "html", null, true);
        echo "

               </div>
             </div>
              <div class=\"line_img line_img_2\">
                <img src=\"";
        // line 109
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<front>"));
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null), 109, $this->source), "html", null, true);
        echo "/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_5\">
               <div class=\"wrap\">

                 ";
        // line 115
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_5", [], "any", false, false, true, 115), 115, $this->source), "html", null, true);
        echo "

               </div>
             </div>
             <div class=\"screen screen_6\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 125
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_6", [], "any", false, false, true, 125), 125, $this->source), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
             <div class=\"screen screen_7\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 139
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_7", [], "any", false, false, true, 139), 139, $this->source), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
             <div class=\"screen screen_8\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 153
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_8", [], "any", false, false, true, 153), 153, $this->source), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
              <div class=\"line_img line_img_3\">
              <img src=\"";
        // line 162
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<front>"));
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null), 162, $this->source), "html", null, true);
        echo "/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_9\">
              <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 171
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screen_9", [], "any", false, false, true, 171), 171, $this->source), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>
             </div>
\t
\t</div> <!-- oo -->
</div>
<div id=\"button-up\">
<span class=\"button-up-txt\">Наверх ^</span>
</div>


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
        return array (  282 => 171,  269 => 162,  257 => 153,  240 => 139,  223 => 125,  210 => 115,  200 => 109,  192 => 104,  181 => 96,  169 => 87,  160 => 82,  152 => 77,  139 => 67,  130 => 63,  126 => 62,  119 => 58,  115 => 57,  101 => 46,  88 => 36,  76 => 27,  66 => 20,  60 => 17,  48 => 8,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"wrap-oo\">
\t<div class=\"oo\">
      \t<header>
        \t<div class=\"header_top\">
\t  \t\t\t<div class=\"container\">
          \t\t\t<div class=\"row\">
            \t\t\t
\t\t\t\t\t\t\t{{ page.header_top }}
             \t\t\t
           \t\t\t</div>
          \t\t</div>
\t\t\t</div>
\t\t\t<div class=\"header_center bgcolor_darkBlue\">
\t\t\t\t<div class=\"container vs\">
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-md-2\">
\t\t\t\t\t\t\t{{ page.header_left }}
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-md-8\">
\t\t\t\t\t\t\t{{ page.header_center }}
\t\t\t\t\t\t</div>
\t\t            \t<div class=\"col-md-2 key\">
\t\t            \t\t<a  class=\"vs_panel\" href=\"#\" title=\"Версия для слабовидящих\">
\t\t\t\t\t<span class=\"vs_img\"></span>
                            </a>
\t\t\t\t<a class=\"search_btn\" href=\"/search\" title=\"Поиск\"></a>
\t\t\t\t\t\t\t{{page.header_right}}
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t    </div>
\t\t    <div class=\"header_info\">
\t\t        <div class=\"container\">
\t\t            <div class=\"row\">
\t\t            \t<div class=\"col-md-12\">
\t\t                \t{{ page.header_info }}
\t\t             \t</div>
\t\t            </div>
\t\t         </div>
\t\t    </div>
\t\t</header>\t
        <nav class=\"top_menu bgcolor_darkBlue\">
\t  \t\t<div class=\"container\">        
\t\t\t  <div class=\"row\">
                           
\t\t\t\t\t{{ page.nav_top }}
                          
\t\t\t </div>\t
\t\t\t</div>
\t\t</nav>
\t\t<!--main-->
                <div class=\"main\">
\t\t<div class=\"container\" role=\"main\">
\t\t\t<div class=\"row\">
\t\t\t\t<div class=\"col-md-3\">
\t\t\t\t\t<div class=\"sidebar left_sidebar\">
\t\t\t\t\t\t{{ page.system_menu }}
\t\t\t\t\t\t{{ page.left_sidebar }}
                \t</div>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-6 content\">
\t\t\t\t\t{{ page.system  }}
\t\t\t\t\t<div class=\"vs_voice\"><div class=\"main_top\">{{ page.main_top }}</div>{{ page.content }}</div>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-3\">
\t\t\t\t\t<div class=\"sidebar right_sidebar\">
\t                    {{ page.right_sidebar }}
\t                </div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
               </div>
             <div class=\"screen screen_1\">
            
               <div class=\"wrap\">
           
                 {{ page.screen_1 }}
\t\t
               </div>
             </div>
             <div class=\"line_img\">
              <img src=\"{{ url('<front>') }}{{ directory }}/images/oblbgt.png\">
             </div>
             <div class=\"screen screen_2\">
               <div class=\"wrap\">

                 {{ page.screen_2 }}

               </div>
             </div>
             <div class=\"screen screen_3\">
               <div class=\"container\">
                <div class=\"row\">
                  <div class=\"wrap2\">

                  {{ page.screen_3 }}
                  </div>
                </div>
               </div>
             </div>
             <div class=\"screen screen_4\">
               <div class=\"wrap\">

                 {{ page.screen_4 }}

               </div>
             </div>
              <div class=\"line_img line_img_2\">
                <img src=\"{{ url('<front>') }}{{ directory }}/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_5\">
               <div class=\"wrap\">

                 {{ page.screen_5 }}

               </div>
             </div>
             <div class=\"screen screen_6\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 {{ page.screen_6 }}

               </div>
               </div>
              </div>
             </div>

             </div>
             <div class=\"screen screen_7\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 {{ page.screen_7 }}

               </div>
               </div>
              </div>
             </div>

             </div>
             <div class=\"screen screen_8\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 {{ page.screen_8 }}

               </div>
               </div>
              </div>
             </div>

             </div>
              <div class=\"line_img line_img_3\">
              <img src=\"{{ url('<front>') }}{{ directory }}/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_9\">
              <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 {{ page.screen_9 }}

               </div>
               </div>
              </div>
             </div>
             </div>
\t
\t</div> <!-- oo -->
</div>
<div id=\"button-up\">
<span class=\"button-up-txt\">Наверх ^</span>
</div>


", "sites/default/themes/custom/start_theme/templates/page--front.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/page--front.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 8);
        static $functions = array("url" => 82);

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                ['url']
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
