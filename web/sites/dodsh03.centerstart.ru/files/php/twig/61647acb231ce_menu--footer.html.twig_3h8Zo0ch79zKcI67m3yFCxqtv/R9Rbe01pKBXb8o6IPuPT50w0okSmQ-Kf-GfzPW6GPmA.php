<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/navigation/menu--footer.html.twig */
class __TwigTemplate_78dfb1eb25d9fefbccf1474b9599763ba814860f9d1c3a099646a2c9bca42a55 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["import" => 1, "macro" => 8, "if" => 10, "for" => 18, "set" => 20];
        $filters = ["escape" => 12];
        $functions = ["link" => 26];

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape'],
                ['link']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

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

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $context["menus"] = $this;
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["menus"]->getmenu_links(($context["items"] ?? null), ($context["attributes"] ?? null), 0));
        echo "

";
    }

    // line 8
    public function getmenu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
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
            $context["menus"] = $this;
            // line 10
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 11
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    echo " 
      <ul ";
                    // line 12
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "menu-footer"], "method")), "html", null, true);
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
                    $context["classes"] = [0 => "menu-footer__item", 1 => (($this->getAttribute(                    // line 22
$context["item"], "is_expanded", [])) ? ("menu-footer__item_collapsed") : (""))];
                    // line 25
                    echo "        <li ";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["item"], "attributes", []), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
                    echo ">
        ";
                    // line 26
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getLink($this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "title", [])), $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "url", []))), "html", null, true);
                    echo "
        ";
                    // line 27
                    if ($this->getAttribute($context["item"], "below", [])) {
                        // line 28
                        echo "          ";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["menus"]->getmenu_links($this->getAttribute($context["item"], "below", []), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)));
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
        } catch (\Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (\Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/navigation/menu--footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  144 => 36,  141 => 34,  137 => 32,  130 => 30,  124 => 28,  122 => 27,  118 => 26,  113 => 25,  111 => 22,  110 => 20,  108 => 19,  103 => 18,  99 => 16,  95 => 14,  93 => 13,  89 => 12,  84 => 11,  81 => 10,  78 => 9,  64 => 8,  57 => 6,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/navigation/menu--footer.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/navigation/menu--footer.html.twig");
    }
}
