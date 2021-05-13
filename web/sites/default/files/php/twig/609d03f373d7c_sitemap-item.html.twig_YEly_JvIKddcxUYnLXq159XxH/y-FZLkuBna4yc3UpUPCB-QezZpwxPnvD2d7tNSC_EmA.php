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

/* modules/contrib/sitemap/templates/sitemap-item.html.twig */
class __TwigTemplate_aa9d6e68a0955ffe4b57b7aa444f559609461be019fc84a6c02643447542b9f6 extends \Twig\Template
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
        // line 16
        $context["classes"] = [0 => "sitemap-item", 1 => ((        // line 18
($context["plugin_type"] ?? null)) ? (("sitemap-plugin--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["plugin_type"] ?? null), 18, $this->source)))) : ("")), 2 => ((        // line 19
($context["plugin_id"] ?? null)) ? (("sitemap-item--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["plugin_id"] ?? null), 19, $this->source)))) : (""))];
        // line 22
        if (($context["content"] ?? null)) {
            // line 23
            echo "<div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 23), 23, $this->source), "html", null, true);
            echo ">
  ";
            // line 24
            if (($context["title"] ?? null)) {
                // line 25
                echo "    <h2>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 25, $this->source), "html", null, true);
                echo "</h2>
  ";
            }
            // line 27
            echo "  <div>
    ";
            // line 28
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 28, $this->source), "html", null, true);
            echo "
  </div>
</div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/sitemap/templates/sitemap-item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  61 => 28,  58 => 27,  52 => 25,  50 => 24,  45 => 23,  43 => 22,  41 => 19,  40 => 18,  39 => 16,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/sitemap/templates/sitemap-item.html.twig", "/var/www/html/web/modules/contrib/sitemap/templates/sitemap-item.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 16, "if" => 22);
        static $filters = array("clean_class" => 18, "escape" => 23);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape'],
                []
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
