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

/* modules/custom/social_links/templates/social-links.html.twig */
class __TwigTemplate_b1d19cf1566b389b756c2378bb1936060bd84d208664923eed408f7551f44e2f extends \Twig\Template
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
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("social_links/social_links"), "html", null, true);
        echo "

";
        // line 3
        $context["links"] = ["vk" => ((("https://vk.com/share.php?url=" . $this->sandbox->ensureToStringAllowed(        // line 4
($context["url"] ?? null), 4, $this->source)) . "&title=") . $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 4, $this->source)), "ok" => ((("https://connect.ok.ru/offer?url=" . $this->sandbox->ensureToStringAllowed(        // line 5
($context["url"] ?? null), 5, $this->source)) . "&title=") . $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 5, $this->source)), "facebook" => ("https://facebook.com/sharer/sharer.php?u=" . $this->sandbox->ensureToStringAllowed(        // line 6
($context["url"] ?? null), 6, $this->source)), "twitter" => ((("https://twitter.com/intent/tweet?url=" . $this->sandbox->ensureToStringAllowed(        // line 7
($context["url"] ?? null), 7, $this->source)) . "&text=") . $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 7, $this->source)), "telegram" => ((("https://telegram.me/share/url?url=" . $this->sandbox->ensureToStringAllowed(        // line 8
($context["url"] ?? null), 8, $this->source)) . "&text=") . $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 8, $this->source)), "whatsup" => (((("https://api.whatsapp.com/send?&text=" . "&text=") . $this->sandbox->ensureToStringAllowed(        // line 9
($context["text"] ?? null), 9, $this->source)) . " ") . $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 9, $this->source)), "mail" => ((("mailto:?subject=" . $this->sandbox->ensureToStringAllowed(        // line 10
($context["text"] ?? null), 10, $this->source)) . "&body=") . $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 10, $this->source))];
        // line 12
        echo "
<div";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "share"], "method", false, false, true, 13), 13, $this->source), "html", null, true);
        echo ">
  <p>Поделиться</p>
  <div class=\"share__links\">
    ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["links"] ?? null));
        foreach ($context['_seq'] as $context["modifier"] => $context["href"]) {
            // line 17
            echo "      <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["href"], 17, $this->source), "html", null, true);
            echo "\" class=\"share__link share__link_";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["modifier"], 17, $this->source), "html", null, true);
            echo "\" rel=\"nofollow noopener\" target=\"_blank\"></a>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['modifier'], $context['href'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "  </div>
</div>



";
    }

    public function getTemplateName()
    {
        return "modules/custom/social_links/templates/social-links.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 19,  66 => 17,  62 => 16,  56 => 13,  53 => 12,  51 => 10,  50 => 9,  49 => 8,  48 => 7,  47 => 6,  46 => 5,  45 => 4,  44 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/custom/social_links/templates/social-links.html.twig", "/var/www/html/web/modules/custom/social_links/templates/social-links.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 3, "for" => 16);
        static $filters = array("escape" => 1);
        static $functions = array("attach_library" => 1);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'for'],
                ['escape'],
                ['attach_library']
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
