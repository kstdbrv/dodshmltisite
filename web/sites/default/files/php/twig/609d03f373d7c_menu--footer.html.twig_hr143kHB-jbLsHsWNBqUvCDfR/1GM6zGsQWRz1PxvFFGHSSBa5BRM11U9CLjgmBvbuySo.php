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

/* sites/default/themes/custom/start_theme/templates/navigation/menu--footer.html.twig */
class __TwigTemplate_bc0e5353434b5f2d06178af0ad7823b1b9e150a42189226986284ef022ce61a9 extends \Twig\Template
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
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 6, $context, $this->getSourceContext()));
        echo "

";
    }

    // line 8
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start(function () { return ''; });
        try {
            // line 9
            echo "  ";
            $macros["menus"] = $this;
            // line 10
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 11
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    echo " 
      <ul ";
                    // line 12
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "menu-footer"], "method", false, false, true, 12), 12, $this->source), "html", null, true);
                    echo ">
    ";
                } elseif ((                // line 13
($context["menu_level"] ?? null) == 1)) {
                    // line 14
                    echo "      <ul class=\"menu-footer submenu\">
    ";
                } else {
                    // line 16
                    echo "      <ul class=\"menu-footer submenu-2\">
    ";
                }
                // line 18
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 19
                    echo "      ";
                    // line 20
                    $context["classes"] = [0 => "menu-footer__item", 1 => ((twig_get_attribute($this->env, $this->source,                     // line 22
$context["item"], "is_expanded", [], "any", false, false, true, 22)) ? ("menu-footer__item_collapsed") : (""))];
                    // line 25
                    echo "        <li ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 25), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo ">
        ";
                    // line 26
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 26), 26, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 26), 26, $this->source)), "html", null, true);
                    echo "
        ";
                    // line 27
                    if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 27)) {
                        // line 28
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 28), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 28, $context, $this->getSourceContext()));
                        echo "
        ";
                    }
                    // line 30
                    echo "      </li>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 32
                echo "    </ul>
  ";
            }
            // line 34
            echo "
  ";
            // line 36
            echo "
";

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "sites/default/themes/custom/start_theme/templates/navigation/menu--footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  129 => 36,  126 => 34,  122 => 32,  115 => 30,  109 => 28,  107 => 27,  103 => 26,  98 => 25,  96 => 22,  95 => 20,  93 => 19,  88 => 18,  84 => 16,  80 => 14,  78 => 13,  74 => 12,  69 => 11,  66 => 10,  63 => 9,  48 => 8,  41 => 6,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/default/themes/custom/start_theme/templates/navigation/menu--footer.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/navigation/menu--footer.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 1, "macro" => 8, "if" => 10, "for" => 18, "set" => 20);
        static $filters = array("escape" => 12);
        static $functions = array("link" => 26);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape'],
                ['link']
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
